# -*- coding: utf-8 -*-
import os
import sys
import json
import re

def callerror():
    print('非法输入!')
    print(r'example : python 2yapi.py -s "d:/myapi-doc/api_data.json" -d "./yapi_api_data.json"')
    print(r'********************************************')
def checkArgv():
    if len(sys.argv) > 1:
        argvMap = {}
        #遍历外部传参
        for argv in sys.argv:
            index = sys.argv.index(argv)
            #如果是以-开头的参数
            if argv[0] == '-':
                if index+1 == len(sys.argv):
                    argvMap[argv[1::]] = None
                else:
                    #取后一位参数
                    try:
                        argvValue = sys.argv[index+1]
                        if argvValue[0] != '-':
                            argvMap[argv[1::]] = argvValue
                        elif argvValue[0] == '-':
                            argvMap[argv[1::]] = None
                    except:
                        return callerror()
                    
            #如果连续两个非-开头的参数
            elif argv[0] != '-' and index !=0:
                lastargv = sys.argv[index-1]
                if lastargv[0] != '-':
                    return callerror()
        #{参数1：值1，参数2：值2...}
        return argvMap
def api_data_parameter2yapi(api_data_parameter,method):
    properties = {}
    required = []
    querylist = []
    for field in api_data_parameter['fields']['请求参数']:
        type = field['type'].lower()
        description = re.sub(r'<p>|</p>','',field['description'])
        key = field['field']
        if method == 'post':
            if field['optional'] is True:
                required.append(key)
            
            properties[key] = {
                "type":type,
                "description":description
            }
        elif method == 'get':
            if field['optional'] is True:
                isreq = "1"
            else:
                isreq = '0'
            query = {
                "required":isreq,
                "_id":"5db802ac7b03c403eee65f3b",
                "name":key,
                "examples":"",
                "desc":description
            }
            querylist.append(query)
    yapi_reqbody = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties":properties,
        "required": required
    }
    yapi_reqquery = querylist
    body = yapi_reqquery if method == 'get' else yapi_reqbody
    return body
    
def api_data_success2yapi(api_data_success):
    properties = {
            "success":{'type':'number'},
            "data":{
                "type":"object",
                "properties":{},
                "required":[]
            }
        }
    for field in api_data_success['fields']['返回参数']:
        required = []
        type = field['type'].lower()
        key = field['field']
        description = re.sub(r'<p>|</p>','',field['description'])
        if field['optional'] is True:
            required.append(key)
        
        properties["data"]['properties'][key] = {
            "type":type,
            "description":description
        }
    properties["data"]["required"] = required
    yapi_rsbody = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties":properties,
        "required": ["success", "data"]
    }
    return yapi_rsbody
def api_data_example2yapi(api_data_example):
    if len(api_data_example) > 0:
        title = api_data_example[0]['title']
        #content 是一个json字符串
        yapi_content = api_data_example[0]['content']
        type = api_data_example[0]['type']
        return yapi_content
    else:
        return None


def api_data2yapi(api_data):
    #初始化一个yapi_api分组
    yapi_api_group = []
    moudel0 = []
    for data1 in api_data:
        #提取接口下的字段,每个接口下有11个字段
        '''
          {
            "type": "get",
            "url": "/zhzl/person/aidsDeatil",
            "title": "描述明细",
            "description": "<p>描述明细</p>",
            "name": "aidsDeatil",
            "group": "aids",
            "parameter": {},
            "success": {},
            "version": "0.0.0",
            "filename": "myapi/person.js",
            "groupTitle": "aids"
          },
        '''
        api_data_type = data1['type']
        api_data_url = data1['url']
        api_data_title = data1['title']
        api_data_group = data1['group']
        api_data_groupTitle = data1['groupTitle']
        api_data_parameter = data1['parameter']
        api_data_success = data1['success']
        api_data_example = data1['success']['examples']
        #可能用不上的字段
        api_data_filename = data1['filename']
        api_data_version = data1['version']
        api_data_name = data1['name']
        
        #将reqbody和resbody转为yapi需要的格式
        if api_data_type == 'post':
            yapi_reqbody = api_data_parameter2yapi(api_data_parameter,api_data_type)
            yapi_reqquery = []
            req_body_type = 'json'
        else:
            yapi_reqbody = {}
            yapi_reqquery = api_data_parameter2yapi(api_data_parameter,api_data_type)
            req_body_type = 'form'
        
        yapi_rsbody = api_data_success2yapi(api_data_success)
        yapi_content = api_data_example2yapi(api_data_example)
        
        #分组模板moudle1
        moudle1 = {
            "index": 0,
            "name": api_data_groupTitle,
            "desc": api_data_groupTitle,
            "add_time": 1572339851,
            "up_time": 1572339851,
            "list": []
        }
        #接口模板moudel2
        #moudel2：同一个分组下的接口，放到moudle1的list中
        moudel2 = {
                "query_path": {
                  "path": api_data_url,
                  "params": []
                },
                "edit_uid": 0,
                "status": "undone",
                "type": "static",
                "req_body_is_json_schema": True,
                "res_body_is_json_schema": True,
                "api_opened": False,
                "index": 0,
                "__v": 0,
                "tag": [],
                "_id": 11,
                "project_id": 11,
                "catid": 11,
                "uid": 11,
                "add_time": 1572340396,
                "up_time": 1572340396,
                "title": api_data_title,
                "path": api_data_url,
                "method": api_data_type.upper(),
                "req_query":yapi_reqquery,
                "req_params": [],
                "req_headers":[],
                "req_body_other": json.dumps(yapi_reqbody,ensure_ascii=False),
                "req_body_type": req_body_type,
                "req_body_form": [],
                "res_body": json.dumps(yapi_rsbody,ensure_ascii=False),
                "res_body_type": "json",
                "desc":yapi_content
        }
        #根据api_data构造yapi_data
        #moudel2(yapi接口)===>moudle1(yapi分组)===>moudle0(装yapi分组的list)
        if api_data_group not in yapi_api_group:
            #创建分组，将接口加入分组
            yapi_api_group.append(api_data_group)
            moudle1["list"].append(moudel2)
            moudel0.append(moudle1)
        else:
            #找到已存在的分组
            for moudel in moudel0:
                if moudel["name"] == api_data_group:
                    moudel["list"].append(moudel2)
                else:
                    pass
    return moudel0


if __name__ == '__main__':
    argvs = checkArgv()
    try:
        #接收输入输出文件路径
        sFile = argvs['s'] if 's' in argvs else None
        dFile = argvs['d'] if 'd' in argvs else './yapi_api_data.json'
        #读取apidoc
        data = open(sFile,'r',encoding='utf-8')
        #格式转换
        moudel0 = api_data2yapi(json.load(data))
        api_yapi_data = json.dumps(moudel0,ensure_ascii=False,indent=4)
        #输出新文件
        f = open(dFile,'w',encoding='utf-8')
        f.write(api_yapi_data)
    except ValueError as e:
        raise e
    

        
    