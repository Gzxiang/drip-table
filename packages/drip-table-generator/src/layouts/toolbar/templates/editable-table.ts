/**
 * This file is part of the drip-table project.
 * @link     : https://drip-table.jd.com/
 * @author   : helloqian12138 (johnhello12138@163.com)
 * @modifier : helloqian12138 (johnhello12138@163.com)
 * @copyright: Copyright (c) 2020 JD Network Technology Co., Ltd.
 */

import { DripTableGeneratorTemplate } from './index';

export const editableTableTemplate: DripTableGeneratorTemplate = {
  key: 'editable-template',
  label: '可编辑表格',
  previewImg: 'https://storage.360buyimg.com/interaction/babel/6000000004303-55-tps-56-56.svg',
  schema: {
    editable: true,
    pagination: {
      pageSize: 20,
      position: 'bottomRight',
    },
    columns: [
      {
        key: 'text_18722ec0161-1323',
        dataIndex: 'id',
        title: '标识',
        component: 'text',
        options: {
          mode: 'single',
          format: '{{rec}}',
          parts: [
            {
              dataIndex: 'id',
            },
          ],
        },
        align: 'center',
        verticalAlign: 'middle',
      },
      {
        key: 'text_18722ec0683-132a',
        dataIndex: 'name',
        title: '名称',
        component: 'text',
        options: {
          mode: 'single',
          format: '{{rec}}',
          parts: [
            {
              dataIndex: 'name',
            },
          ],
        },
        align: 'center',
        verticalAlign: 'middle',
      },
      {
        key: 'mock_2',
        title: '详情',
        align: 'center',
        dataIndex: 'description',
        component: 'text',
        hidable: true,
        options: { mode: 'single', ellipsis: true, maxRow: 1 },
      },
      {
        key: 'tag_18722ec1c73-1336',
        dataIndex: 'status',
        title: '状态',
        description: '',
        component: 'tag',
        options: {
          prefix: '',
          suffix: '',
        },
        align: 'center',
        verticalAlign: 'middle',
      },
      {
        key: 'link_18722ec2412-133d',
        dataIndex: '',
        title: '操作',
        component: 'link',
        options: {
          mode: 'multiple',
          label: '链接',
          href: 'http://api.example.com/api_path',
          event: '',
          operates: [
            {
              label: '编辑',
              target: '',
              event: 'edit',
            },
            {
              label: '删除',
              target: '',
              event: 'delete',
            },
          ],
          trigger: 'hover',
        },
        align: 'center',
        verticalAlign: 'middle',
      },
    ],
  },
};
