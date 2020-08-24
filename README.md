# password_generator
Javascript Exercise to produce a password generator

# Author : Chris 

## Psuedocode 
variables to create 
    array of upper case chars 
    array of lower case chars 
    array of numbers 
    array of special characters

    array of selected criteria, intiated as an empty array 

    var num for password length 
        user input 
        logic to preven password being too short of too long 
    

Create logic for when button is clicked 

prompt user for length of password 
prompt user for character types 
    prompt for uppercase 
        if yes, add to select criteria array 
    prompt for lowercase
        if yes, add to select criteria array
    prompt for numeric 
        if yes, add to select criteria array
    prompt for special character 
        if yes, add to select criteria array
    
Create logic to test condition if user selected at least one password condition 
if yes 
    create loop logic to
        1. randomly select on array from the selected criteria array
            2. select a random character of that random array
if no, display prompt, ask for conditions again 

display password in prompt or on the page 




