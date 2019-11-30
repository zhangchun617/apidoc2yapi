# -*- coding: utf-8 -*-
import os, sys, json, re
from apidoc2jmeter_utils import loadTemplate

def apidoc2jmeter(apijson):
    urls = []
    groups = []
    for api in apijson:
        #print(api)
        url = urlparts(api)
        urls.append(url)
        if url['group'] not in groups:
            groups.append(url['group'])

    urls = [url for url in urls if not url is None]
    template = loadTemplate()

    return template.render(urls=urls,groups=groups)
    
def urlparts(api):
    api_type = api['type']
    #兼容非标准格式method的写法，如post/get
    api_method = 'POST' if 'post' in api_type else 'GET'
    #兼容携带query参数的url写法,如/backend/person/detail?id=&name=&age=
    api_url = api['url'] if api['url'][0] == '/' else "/"+api['url']
    api_url = api_url.split('?')[0]
    
    api_title = api['title']
    api_group = api['group']
    api_groupTitle = api['groupTitle']
    api_parameters = api['parameter'] if 'parameter' in api else {}
    api_success = api['success'] if 'success' in api else {}
    api_example = api_success['examples'] if 'examples' in api_success else {}
    #获取请求参数
    api_parameter = {}
    try:
        for field in api_parameters['fields']['请求参数']:
            key = field['field']
            api_parameter[key] = ''
    except:
        api_parameter = {}
    return {'url':api_url,'method':api_method,'path':api_url,'title':api_title,'group':api_group,'params':api_parameter}

if __name__ == '__main__':
    sFile = r".\api-doc-example\api_data.json"
    dFile = r".\api-jmeter.jmx"
    
    #读取apidoc
    data = open(sFile,'r',encoding='utf-8')
    apijson = json.load(data)
    #apidoc2jmeter
    x = apidoc2jmeter(apijson)
    f = open(dFile,'w',encoding='utf-8')
    f.write(x)
