 let a=document.getElementById("inputbox");
     function Clear()
            {
                a.value="";
            }
            function myfunction(number)
            {
                a.value+=number;
            }
            
            function cal(){
                const exp=a.value;
                 let result;
    
                if(exp.includes('+'))
                {
                    const b=exp.split('+');
                    result= +((b[0]) + +(b[1]));
                    
                }
                else if(exp.includes('-'))
                {
                    const b=exp.split('-');
                    result=+((b[0]) - +(b[1]));
                }
                else if(exp.includes('*'))
                {
                    const b=exp.split('*');
                    result=+((b[0]) *+(b[1]));
                }
                else if(exp.includes('/'))
                {
                    const b=exp.split('/');
                    result=+((b[0]) /+(b[1]));
                }
                a.value=result;
            }
             