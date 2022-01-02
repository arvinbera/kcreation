export default class SessionHelper {

    public static readonly Auth="auth";

    public static SetSession<T>(value:T):void{
        localStorage.setItem(this.Auth,JSON.stringify(value));
    }

    public static  GetSession<T>():T {
        let session=localStorage.getItem(this.Auth);
        if(!session || session=="undefined"){
            return null as unknown as T;
        }
        return JSON.parse(session) as T;

    }

}