import React from "react"
import { Model } from 'dvax'
import { Table } from 'antd'
import Header from './header'
import columns from './columns'
import tStyles from './table.less'
import './model'
const $ = Model.assign('current')
export default Model.connect(['category','current'])(
    class CourseInfo extends React.Component { 
        componentDidMount(){ 
            $.put({type:'clearPagination'}) // 有的时候只有切换tab才需要 清空query和page
            $.put({type:'clearQuery'}) 

            $.put({type:'get'})
        }
        render() {
            return (
                <div>
                    <Header {...this.props}/>
                    <Table
                        className={tStyles.table}
                        rowKey={record=>record.id}
                        columns={columns}
                        dataSource={this.props.data}
                        locale={{emptyText: '暂无数据'}}
                        bordered
                        pagination={{...this.props.pagination,showSizeChanger:true,onShowSizeChange}}
                        onChange={pageInfo=>$.put({type:'changePage',pageInfo})}
                    />
                </div>
            )
        }
    }
)
function onShowSizeChange(current, pageSize) {
    $.put({type:'changePage',pageInfo:{pageSize,current}})
}
