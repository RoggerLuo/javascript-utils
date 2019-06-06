<Row style={{marginBottom:'15px'}}>
    <Col span={2} offset={3}>
        <Button onClick={()=>{
            onSubmit(()=>{$.change('currentStep',3)})
        }} loading={false} type="primary" size="large" style={{width:'150px',background:'#ff7838',border:'none'}}> 
            下一页 
        </Button>
    </Col>
</Row>
