export const CheckVaildDate =(name,email,password)=>{
    // eslint-disable-next-line no-useless-escape
    const isnamevaild = /^([a-zA-Z\-]{1,50}|[a-zA-Z\-]+\s{1}[a-zA-Z\-]+|[a-zA-Z\-]+\s{1}[a-zA-Z]+\s{1}[a-zA-Z\-]+)$/.test(name);
    // eslint-disable-next-line no-useless-escape
    const isemailvaild = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const ispasswordvaild = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(password);
    if (!isnamevaild) return "Name is Not Vaild";
    if (!isemailvaild) return "Email ID is Not Vaild";
    if (!ispasswordvaild) return "Password is Not Vaild";
    return(null);
};