export default class BaseCore {

    public static  ModelToFormData(model:any): FormData{

        let form=new FormData();
        for(let key in model){
            form.append(key,model[key]);
        }
        return form;
        
    }
}