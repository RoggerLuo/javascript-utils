import React from 'react'
import {Model} from 'dvax'
import {Modal,Button,Input} from 'antd'
import {redirect} from 'components/history'
const confirm = Modal.confirm;
import moment from 'moment'
export default [
    {
        title: '有效时段',
        dataIndex: 'userName',
        width: 150,
        render(value,record){
            return moment(record.validBegin).format('YYYY-MM-DD') + ' 至 ' + moment(record.validEnd).format('YYYY-MM-DD')
        }
    },
    {
        title: '问候主题',
        dataIndex: 'title',
        width: 150
    },
    {
        title: '问候概述',
        dataIndex: 'summary',
        width: 150,
    },
    {
        title: '发送方式',
        dataIndex: 'sendType',
        width: 100,
        render(value,record){
            const map = {
                'EMAIL':'邮箱',
                'KK':'kk消息',
                'SMS':'手机短信',
            }
            return value.map(el=>map[el]).join(',')
        }
    },
    {
        title: '当前已发送',
        dataIndex: 'sendNum',
        width: 70,
    },{
        title: '当前已阅读',
        dataIndex: 'readNum',
        width: 70,
    },{
        title: '设置者',
        dataIndex: 'createUserName',
        width: 100,
    },
    
    {
        title: '操作',
        dataIndex: 'options',
        width: 140,
        render: (options, record, index) => {
            function showConfirm() {
                confirm({
                  title: '删除',
                  content: '删除操作成功后，该账号将不能再登录管理端，原操作记录保留',
                  onOk() {
                    return new Promise((resolve, reject) => {
                        // Model.run()
                        resolve()
                    }).catch(() => console.log('Oops errors!'));
                  },
                  onCancel() {},
                });
              }
            return (<div> 
                <span onClick={()=>{
                    redirect(`/home/greet/list/current/view/${record.correlationId}`)
                }} style={{color:'#576ff8',cursor:'pointer'}}>预览</span>
                &nbsp;&nbsp;
                {(()=>{
                    if(record.createUserId === Model.get('commonData').userInfo.workplusId){
                        return <span>
                            <span onClick={()=>{
                                redirect(`/home/greet/list/current/edit/${record.correlationId}`)
                            }} style={{color:'#576ff8',cursor:'pointer'}}>管理</span>
                            &nbsp;&nbsp;
                        </span>
                    }else{
                    }

                })()}
                
                <span 
                    onClick={()=>{
                        Model.run('draft',function*({fetch}){
                            yield fetch(`auth/${record.id}`,{method:'post',body:{state:'STOP'}})
                            Model.dispatch({type:'current/get'})
                        })                  
    
                    }} 
                    style={{color:'#576ff8',cursor:'pointer'}}
                >终止</span>
                &nbsp;&nbsp;


                {(()=>{
                    if(record.sendNum > 0){
                        
                        return   <span 
                            onClick={()=>{
                                redirect(`/home/greet/list/current/report/${record.correlationId}`)
                            }} 
                            style={{color:'#576ff8',cursor:'pointer'}}
                        >报告</span>
                    }

                })()}
                

            </div>)
        }
    }
]
