export default {
  basic: [
    {
      type: 'input',
      name: '单行文本',

      options: {
        width: '40%',
        defaultValue: '',
        required: false,
        dataType: 'string',
        pattern: '',
        placeholder: '',
        disabled: false

      }
    },
    {
      type: 'textarea',
      name: '多行文本',

      options: {
        width: '40%',
        defaultValue: '',
        required: false,
        disabled: false,
        pattern: '',
        placeholder: ''

      }
    },
    {
      type: 'text',
      name: '文字',

      options: {
        defaultValue: '这是一段文字'
      }
    },
    {
      type: 'mobile',
      name: '手机号码',

      options: {
        width: '40%',
        defaultValue: '',
        required: false,
        pattern: '/^1([34578])\\d{9}$/',
        placeholder: '',
        disabled: false

      }
    },
    {
      type: 'telephone',
      name: '电话号码',

      options: {
        width: '40%',
        defaultValue: '',
        required: false,
        pattern: '/^0\\d{2,3}-?\\d{7,8}$/',
        placeholder: '',
        disabled: false

      }
    },
    {
      type: 'email',
      name: '邮箱',

      options: {
        width: '40%',
        defaultValue: '',
        required: false,
        pattern: '/^([a-zA-Z0-9_.\\-])+@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$/',
        placeholder: '',
        disabled: false

      }
    },
    {
      type: 'postalCode',
      name: '邮政编码',

      options: {
        width: '40%',
        defaultValue: '',
        required: false,
        pattern: '/^[1-9][0-9]{5}$/',
        placeholder: '',
        disabled: false

      }
    },
    {
      type: 'website',
      name: '网址',

      options: {
        width: '40%',
        defaultValue: '',
        required: false,
        pattern: `/((https|http|ftp|rtsp|mms):\\/\\/)?(([0-9a-zA-Z_!~*'().&=+$%-]+:)?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\\.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+\\.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z]\\.[a-zA-Z]{2,6})(:[0-9]{1,4})?((\\/?)|(\\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\\/?)/g`,
        placeholder: '',
        disabled: false

      }
    },
    {
      type: 'intFloat',
      name: '数字(浮点型)',

      options: {
        width: '40%',
        defaultValue: '',
        required: false,
        pattern: `/^-?\\d+(\\.\\d+)?$/`,
        placeholder: '',
        disabled: false,

        min: 0,
        max: 10,
        enableMinMax: false
      }
    },
    {
      type: 'int',
      name: '数字(整型)',

      options: {

        width: '40%',
        defaultValue: '',
        required: false,
        pattern: '/^-?\\d+$/',
        placeholder: '',
        disabled: false,

        min: 0,
        max: 10,
        enableMinMax: false
      }
    },
    {
      type: 'intLong',
      name: '数字(长整型)',

      options: {
        width: '40%',

        defaultValue: '',
        required: false,
        pattern: '/^-?\\d+$/',
        placeholder: '',
        disabled: false,

        min: 0,
        max: 10,
        enableMinMax: false
      }
    },
    {
      type: 'number',
      name: '计数器',

      options: {
        width: '40%',

        required: false,
        defaultValue: '',
        min: 0,
        max: 10,
        step: 1,
        disabled: false,
        controlsPosition: ''

      }
    },
    {
      type: 'radio',
      name: '单选框',

      options: {

        inline: true,
        defaultValue: '',
        showLabel: false,
        hasControl: false,
        options: [
          {
            value: '选项1',
            label: '选项1',
            relatedList: []
          },
          {
            value: '选项2',
            label: '选项2',
            relatedList: []
          },
          {
            value: '选项3',
            label: '选项3',
            relatedList: []
          }
        ],
        required: false,
        remote: true,
        remoteOptions: [],
        props: {
          value: 'value',
          label: 'label'
        },
        remoteCall: '',
        disabled: false

      }
    },
    {
      type: 'checkbox',
      name: '多选框',

      options: {

        inline: false,
        defaultValue: [],
        showLabel: false,
        options: [
          {
            label: '选项1',
            value: '选项1'
          },
          {
            label: '选项2',
            value: '选项2'
          },
          {
            label: '选项3',
            value: '选项3'
          }
        ],
        required: false,
        remote: true,
        remoteOptions: [],
        props: {
          value: 'value',
          label: 'label'
        },
        remoteCall: '',
        disabled: false

      }
    },
    {
      type: 'year',
      name: '年份',

      options: {
        width: '40%',

        defaultValue: '',
        defaultType: 0,
        readonly: false,
        disabled: false,
        editable: true,
        clearable: true,
        placeholder: '',
        startPlaceholder: '',
        endPlaceholder: '',
        type: 'year',
        format: 'yyyy',
        timestamp: false,
        required: false

      }
    },
    {
      type: 'month',
      name: '月份',

      options: {
        width: '40%',

        defaultValue: '',
        defaultType: 0,
        readonly: false,
        disabled: false,
        editable: true,
        clearable: true,
        placeholder: '',
        startPlaceholder: '',
        endPlaceholder: '',
        type: 'month',
        format: 'MM',
        timestamp: false,
        required: false

      }
    },
    {
      type: 'year_month',
      name: '年月份',

      options: {
        width: '40%',

        defaultValue: '',
        defaultType: 0,
        readonly: false,
        disabled: false,
        editable: true,
        clearable: true,
        placeholder: '',
        startPlaceholder: '',
        endPlaceholder: '',
        type: 'month',
        format: 'yyyy-MM',
        timestamp: false,
        required: false

      }
    },
    {
      type: 'date',
      name: '日期',

      options: {
        width: '40%',

        defaultValue: '',
        defaultType: 0,
        readonly: false,
        disabled: false,
        editable: true,
        clearable: true,
        placeholder: '',
        startPlaceholder: '',
        endPlaceholder: '',
        type: 'date',
        format: 'yyyy-MM-dd',
        timestamp: false,
        required: false

      }
    },
    {
      type: 'dates',
      name: 'dates',

      options: {
        width: '40%',

        defaultValue: '',
        defaultType: 0,
        readonly: false,
        disabled: false,
        editable: true,
        clearable: true,
        placeholder: '',
        startPlaceholder: '',
        endPlaceholder: '',
        type: 'dates',
        format: 'yyyy-MM-dd',
        timestamp: false,
        required: false

      }
    },
    {
      type: 'week',
      name: '星期',

      options: {
        width: '40%',

        defaultValue: '',
        defaultType: 0,
        readonly: false,
        disabled: false,
        editable: true,
        clearable: true,
        placeholder: '',
        startPlaceholder: '',
        endPlaceholder: '',
        isRange: false,
        arrowControl: true,
        format: 'HH:mm:ss',
        required: false

      }
    },
    {
      type: 'datetime',
      name: '日期时间',

      options: {
        width: '40%',

        defaultValue: '',
        defaultType: 0,
        readonly: false,
        disabled: false,
        editable: true,
        clearable: true,
        placeholder: '',
        startPlaceholder: '',
        endPlaceholder: '',
        format: 'yyyy-MM-dd HH:mm:ss',
        timestamp: false,
        required: false

      }
    },
    {
      type: 'datetimerange',
      name: '日期时间范围',

      options: {
        width: '40%',

        defaultValue: '',
        defaultType: 0,
        readonly: false,
        disabled: false,
        editable: true,
        clearable: true,
        placeholder: '',
        startPlaceholder: '',
        endPlaceholder: '',
        format: 'yyyy-MM-dd HH:mm:ss',
        timestamp: false,
        required: false

      }
    },
    {
      type: 'daterange',
      name: '日期范围',

      options: {
        width: '40%',

        defaultValue: '',
        defaultType: 0,
        readonly: false,
        disabled: false,
        editable: true,
        clearable: true,
        placeholder: '',
        startPlaceholder: '',
        endPlaceholder: '',
        format: 'yyyy-MM-dd HH:mm:ss',
        timestamp: false,
        required: false

      }
    },
    {
      type: 'monthrange',
      name: '日期范围',

      options: {
        width: '40%',

        defaultValue: '',
        defaultType: 0,
        readonly: false,
        disabled: false,
        editable: true,
        clearable: true,
        placeholder: '',
        startPlaceholder: '',
        endPlaceholder: '',
        format: 'yyyy-MM-dd HH:mm:ss',
        timestamp: false,
        required: false

      }
    },
    {
      type: 'switch',
      name: '开关',

      options: {

        defaultValue: false,
        required: false,
        disabled: false,

        closeMsg: '已关闭',
        openMsg: '已开启'
      }
    },
    {
      type: 'multiple_select',
      name: '多选下拉框',

      options: {
        width: '40%',

        defaultValue: '',
        multiple: true,
        disabled: false,
        clearable: false,
        placeholder: '',
        required: false,
        showLabel: false,
        options: [
          {
            label: '下拉框1',
            value: '下拉框1',
            relatedList: []
          },
          {
            label: '下拉框2',
            value: '下拉框2',
            relatedList: []
          }, {
            label: '下拉框3',
            value: '下拉框3',
            relatedList: []
          }
        ],
        remote: true,
        filterable: false,
        remoteOptions: [],
        props: {
          value: 'value',
          label: 'label'
        },
        remoteCall: ''

      }
    },
    {
      type: 'select',
      name: '下拉选择框',

      options: {
        width: '40%',

        defaultValue: '',
        multiple: false,
        disabled: false,
        clearable: false,
        placeholder: '',
        required: false,
        showLabel: false,
        hasControl: false,
        options: [
          {
            label: '下拉框1',
            value: '下拉框1',
            relatedList: []
          },
          {
            label: '下拉框2',
            value: '下拉框2',
            relatedList: []
          }, {
            label: '下拉框3',
            value: '下拉框3',
            relatedList: []
          }
        ],
        remote: true,
        filterable: false,
        remoteOptions: [],
        props: {
          value: 'value',
          label: 'label'
        },
        remoteCall: ''

      }
    }
  ],
  advance: [
    {
      type: 'image_upload',
      name: '图片',

      options: {
        action: '',

        required: false,
        fileList: [],
        multiple: false,
        // 最大上传数
        length: 3,
        maxFileSize: 1,

        presetImgs: ''
      }
    },
    {
      type: 'file_upload',
      name: '附件',

      options: {
        action: '',

        required: false,
        fileList: [],
        multiple: false,
        maxFileSize: 10,
        // 最大上传数
        length: 3

      }
    },
    {
      type: 'signature',
      name: '签名',

      options: {
        action: '',

        required: false,
        fileList: [],
        multiple: false,
        // 最大上传数
        length: 3,
        maxFileSize: 1

      }
    },

    {
      type: 'pop_up',
      name: '弹窗控件',
      options: {
        width: '40%',
        defaultValue: '',
        required: false,
        placeholder: '',
        disabled: false,
        multiple: false
      }
    },
    {
      type: 'gis_location',
      name: 'Gis定位',
      options: {
        width: '80%',
        defaultValue: '',
        required: false,
        pattern: '',
        placeholder: '',
        disabled: false,
        zoom: 13,
        lat: 28.683016,
        lnt: 115.857963,
        city: '南昌',
        positions: []
      },
      modelExt: {
        lat: 'lat',
        lnt: 'lng',
        address: 'address',
        latName: '经度',
        lntName: '纬度',
        addressName: '详细地址'
      }
    },
    {
      type: 'region_select',
      name: '行政区划',
      options: {
        width: '40%',
        defaultValue: '',
        disabled: false,
        required: false,
        pattern: '',
        placeholder: ''
      },
      modelExt: {
        province: 'province',
        provinceName: '省份',
        provinceCode: 'province_code',
        provinceCodeName: '省份代码',
        city: 'city',
        cityName: '市',
        cityCode: 'city_code',
        cityCodeName: '市代码',
        area: 'area',
        areaName: '区县',
        areaCode: 'area_code',
        areaCodeName: '县区代码'
      }
    },
    {
      type: 'table',
      options: {
        gutter: 0,
        justify: 'start',
        align: 'top',
        addModel: 'single',
        dsConf: {
          formId: '',
          formName: '',
          subKey: '',
          mapping: [],
          columns: [],
          condFilters: [],
          defaultSelect: false
        }
      },
      tableColumns: [],
      name: '子表单',
      key: '',
      model: ''
    }
  ],
  layout: [
    {
      type: 'grid',
      name: '栅格布局',

      columns: [
        {
          span: 12,
          list: []
        },
        {
          span: 12,
          list: []
        }
      ],
      options: {
        gutter: 0,
        justify: 'start',
        align: 'top'
      }
    }
  ]
};
