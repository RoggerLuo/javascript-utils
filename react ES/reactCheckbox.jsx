<div>
    <label htmlFor={`usertasksetting${index}`} style={{cursor:'pointer'}}>
        <div className="property-row-content"> 
            {title}
        </div>
    </label>
    &nbsp;
    <input 
        onChange={oncheck} 
        checked={checked||false} 
        value={checked||false}
        style={{cursor:'pointer'}} 
        id={`usertasksetting${index}`} 
        name={`usertasksetting${index}`} 
        type="checkbox" 
    /> 
</div>