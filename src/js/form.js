document.addEventListener('DOMContentLoaded', (event) =>{


    const form = document.querySelector('.form');
    const inputs = form.querySelectorAll('.form-control');
    const inputsLength = inputs.length;


    function correctClass(item){

        item.classList.add('correct');
        item.classList.remove('error');
    }

    function errorClass(item){

        item.classList.remove('correct');
        item.classList.add('error');
    }


    form.addEventListener('click', (e) =>{

        let input = e.target;


            input.addEventListener('blur', () =>{

                let inputLength = input.value.length;
                let text = input.value;
                let textString = text.toString();
                let textLength = textString.length;
                let type = input.type;
                const emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                let isEmail = emailPattern.test(textString);
                const textPattern = /[a-zA-Z]/;
                const isText = textPattern.test(textString);
        

             

            if (type =='text')  {

                    if(textLength > 2 && isText) {

                        correctClass(input);
                      
                    }

                    else {
                    
                        errorClass(input);
                    } 

                }

            if (type =='email')  {
            
                    if(isEmail) {

                        correctClass(input);
                    }

                    else {
                    
                        errorClass(input);
                    } 

                }

            if (type =='number')  {
                
                if( inputLength > 6) {
                    
                    correctClass(input);
                }

                else {
            
                    errorClass(input);
                } 

            }

            if (type =='textarea')  {
                
                if(textLength > 3) {

                    correctClass(input);
                }

                else {

                   errorClass(input);
                } 

            }
        });
        
    });




    form.addEventListener('submit', (e)=> {

            e.preventDefault();
            let errors = [];


            function isEmpty(text) {

                return text.value == "";
            }


            for (let i =0; i <inputsLength; i++) {

                if(inputs[i].classList.contains('error') || isEmpty(inputs[i]) ) {

                    errors.push(inputs[i]);

                    if (isEmpty(inputs[i])) {

                        inputs[i].classList.add('error', 'error-border');
                        
                    }
                }
            }



            if (errors.length > 0) {

                alert("Popraw formularz");
            
            }

            else {

                alert("Formularz poprawnie wysłany");
                form.submit();
            }

        });
    
});
