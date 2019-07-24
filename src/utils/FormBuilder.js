import React from 'react';

export default function buildForm(formdata,handler,state){
    let keyObject;
    let output = [];
    Object.keys(formdata).forEach((key)=>{
        keyObject = eval(`formdata.${key}`);
        if(keyObject.type === "text"){
            output.push(
                <div className="form-group col-md-12">
                    {
                        keyObject.required 
                        ? (<div><label>{keyObject.placeholder}</label> <span className="text-danger">*</span></div>) 
                        : (<label>{keyObject.placeholder}</label>)
                    }
                    {
                        keyObject.readonly 
                        ? (
                            <input
                            type="text"
                            className="form-control"
                            value={eval("state."+key)}
                            name={key}
                            readOnly
                            onChange={handler}
                        />
                        ) 
                        : (
                            <input
                            type="text"
                            className="form-control"
                            value={eval("state."+key)}
                            name={key}
                            onChange={handler}
                        />
                        )
                    }
                </div>
            )
        }
        else if(keyObject.type === "select"){
            let options = [];
            keyObject.data.forEach((value,index)=>{
                index == 0 
                ? options.push(<option value={eval(`value.${keyObject.id}`)} selected>{eval(`value.${keyObject.selectPlaceholder}`)}</option>)
                : options.push(<option value={eval(`value.${keyObject.id}`)}>{eval(`value.${keyObject.selectPlaceholder}`)}</option>)

            })
            output.push(
                <div className="form-group col-md-12">
                    {
                        keyObject.required 
                        ? (<div><label>{keyObject.placeholder}</label> <span className="text-danger">*</span></div>) 
                        : (<label>{keyObject.placeholder}</label>)
                    }
                    <select className="form-control" value={eval("state."+key)} name={key} onChange={handler}>
                        {options}
                    </select>
                </div>
            )
        }
        else if(keyObject.type === "textarea"){
            output.push(
                <div className="form-group col-md-12">
                    {
                        keyObject.required 
                        ? (<div><label>{keyObject.placeholder}</label> <span className="text-danger">*</span></div>) 
                        : (<label>{keyObject.placeholder}</label>)
                    }
                    <textarea className="form-control" value={eval("state."+key)} cols="2" rows="2" name={key} onChange={handler}></textarea>
                </div>
            )
        }
    })
    return output;
}