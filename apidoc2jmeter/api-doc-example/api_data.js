define({ "api": [
  {
    "type": "get",
    "url": "/zhzl/person/getLowPersonDetail",
    "title": "低保人员详情",
    "description": "<p>低保人员详情</p>",
    "name": "getLowPersonDetail",
    "group": "lowPerson",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "请求参数",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id值.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "pId",
            "description": "<p>人员ID.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "personType",
            "description": "<p>人口类型 1户籍人口 2流动人口 3境外人口.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>人员姓名.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "cardNum",
            "description": "<p>身份证号.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "birthDate",
            "description": "<p>出生日期.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>性别 域字段.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "gridName",
            "description": "<p>所属网格.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "isDisability",
            "description": "<p>是否残疾.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>联系电话.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "familyName",
            "description": "<p>户主名称.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "relation",
            "description": "<p>与户主关系 域字段 familyRelation.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "residence",
            "description": "<p>现住地.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "fCardNum",
            "description": "<p>户主身份证号.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "rAddr",
            "description": "<p>现住门（楼）祥址.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "familyNumbers",
            "description": "<p>家庭总人口.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "enjoymentNumbers",
            "description": "<p>享受人数.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "perMonthlyIncome",
            "description": "<p>人均月收入.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "lowType",
            "description": "<p>低保类型 域字段.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "residenceType",
            "description": "<p>户口性质.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "perSubsidyMonthly",
            "description": "<p>个人月补助.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "familySubsidyMonthly",
            "description": "<p>全家月补助.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "helpReason",
            "description": "<p>救助原因.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "concernDegree",
            "description": "<p>关注程度 域字段.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "receiveDate",
            "description": "<p>开始领取时间.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "identificationStandard",
            "description": "<p>识别标准 域字段.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "poorHouseholdsAttribute",
            "description": "<p>贫困户属性 域字段.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "mainPovertyReason",
            "description": "<p>主要致贫原因 域字段（povertyReason） 单个.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "otherPoverReason",
            "description": "<p>其他致贫原因 域字段（povertyReason） 多个 .</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "isNewMC",
            "description": "<p>新型农村合作医疗.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "isCX",
            "description": "<p>城乡居民养老保险.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "helpDepartment",
            "description": "<p>帮扶单位名称.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "helperName",
            "description": "<p>帮扶责任人.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "helperPhone",
            "description": "<p>联系方式.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "auditor",
            "description": "<p>审核人.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "formMakingPerson",
            "description": "<p>制单人.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "formMakingDate",
            "description": "<p>制单日期.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回数据格式:",
          "content": "   \n{\n   \"success\": 1,\n   \"data\": {\n       \"id\": \"00f08938-86e2-4cd3-9806-24a899543a84\",\n       \"pId\": \"00f08938-86e2-4cd3-9806-24a899543a84\",\n       \"personType\": \"1\",\n       \"name\": \"王文\",\n       \"cardNum\": \"330522195706020025\",\n       \"birthDate\": \"1957-06-02\",\n       \"gender\": \"性别domain值\",\n       \"gridName\": \"金莲桥居委会/金莲桥居委会第二网格\",\n       \"isDisability\": \"是\",\n       \"phone\": \"18305051837\",\n       \"familyName\": \"王文\",\n       \"relation\": \"与户主关系 domain值 familyRelation\",\n       \"residence\": \"雉城街道三狮社区第四网格\",\n       \"fCardNum\": \"421222198908250099\",\n       \"rAddr\": \"三狮苑小区17幢2单元502\",\n       \"familyNumbers\": \"10\",\n       \"enjoymentNumbers\": \"3\",\n       \"perMonthlyIncome\": \"1000\",\n       \"lowType\": \"城镇低保domain值\",\n       \"residenceType\": \"农村domain值\",\n       \"perSubsidyMonthly\": \"500\",\n       \"familySubsidyMonthly\": \"1500\",\n       \"helpReason\": \"救助原因\",\n       \"concernDegree\": \"关注程度 domain值\",\n       \"receiveDate\": \"2017-01-01\",\n       \"identificationStandard\": \"识别标准 domain值\",\n       \"poorHouseholdsAttribute\": \"贫困户属性 domain值\",\n       \"mainPovertyReason\": \"主要致贫原因 domain值（povertyReason） 单个 \",\n       \"otherPoverReason\": \"其他致贫原因 domain值（povertyReason） 多个 \",\n       \"isNewMC\": \"未参保\",\n       \"isCX\": \"未参保\",\n       \"helpDepartment\": \"社保局\",\n       \"helperName\": \"孟令健\",\n       \"helperPhone\": \"15207246768\",\n       \"auditor\": \"孟令健\",\n       \"formMakingPerson\": \"李三\",\n       \"formMakingDate\": \"2017-06-07\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapi/person.js",
    "groupTitle": "lowPerson"
  },
  {
    "type": "get",
    "url": "/zhzl/person/getLowPersonList",
    "title": "低保人员列表",
    "description": "<p>低保人员列表</p>",
    "name": "getLowPersonList",
    "group": "lowPerson",
    "parameter": {
      "fields": {
        "请求参数": [
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>分页偏移量.</p>"
          },
          {
            "group": "请求参数",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>每页数据条数.</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": true,
            "field": "dwdm",
            "description": "<p>所属辖区ID.</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": true,
            "field": "keyword",
            "description": "<p>关键字.</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>姓名.</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": true,
            "field": "cardNum",
            "description": "<p>身份证号码.</p>"
          },
          {
            "group": "请求参数",
            "type": "Array",
            "optional": true,
            "field": "gender",
            "description": "<p>性别 域字段.</p>"
          },
          {
            "group": "请求参数",
            "type": "Array",
            "optional": true,
            "field": "maritalStatus",
            "description": "<p>婚姻状况 域字段.</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": true,
            "field": "startBirthdayDate",
            "description": "<p>出生日期起始.</p>"
          },
          {
            "group": "请求参数",
            "type": "String",
            "optional": true,
            "field": "endBirthdayDate",
            "description": "<p>出生日期结束.</p>"
          },
          {
            "group": "请求参数",
            "type": "Array",
            "optional": true,
            "field": "healthCondition",
            "description": "<p>健康状况 域字段.</p>"
          },
          {
            "group": "请求参数",
            "type": "Array",
            "optional": true,
            "field": "lowType",
            "description": "<p>低保类型 域字段.</p>"
          },
          {
            "group": "请求参数",
            "type": "Array",
            "optional": true,
            "field": "residenceType",
            "description": "<p>户口性质 域字段.</p>"
          },
          {
            "group": "请求参数",
            "type": "Array",
            "optional": true,
            "field": "isNewMC",
            "description": "<p>新型农村合作医疗 0：未参保 1：参保.</p>"
          },
          {
            "group": "请求参数",
            "type": "Array",
            "optional": true,
            "field": "isCX",
            "description": "<p>城乡居民基本养老保险  0：未参保 1：参保.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "返回参数": [
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>人员姓名.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "cardNum",
            "description": "<p>身份证号.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>性别 域字段.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "gridName",
            "description": "<p>所属网格.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "lowType",
            "description": "<p>低保类型 域字段.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "helpReason",
            "description": "<p>救助原因.</p>"
          },
          {
            "group": "返回参数",
            "type": "String",
            "optional": false,
            "field": "isDisability",
            "description": "<p>是否残疾.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回数据格式:",
          "content": "   \n{\n   \"success\":1,\n   \"data\":{\n       \"total\": 100,\n       \"rows\": [\n           {\n               \"id\": \"00f08938-86e2-4cd3-9806-24a899543a84\",\n               \"name\": \"张三\",\n               \"cardNum\": \"330522********0025\",\n               \"gender\": \"2 domian值\",\n               \"gridName\": \"金莲桥居委会/金莲桥居委会第二网格\",\n               \"lowType\": \"1 domain值\",\n               \"helpReason\": \"1\",\n               \"isDisability\": \"是\"\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "myapi/person.js",
    "groupTitle": "lowPerson"
  }
] });
