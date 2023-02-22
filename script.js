let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const present = parseInt(document.getElementById('present_hrs').value);
    const absent = parseInt(document.getElementById('absent_hrs').value);
    const days = parseInt(document.getElementById('no_of_days').value);
    const total_hrs= present+absent;
    const result = document.getElementById('output');
    let present_status=false, absent_status=false, days_status=false;

    if(present === '' || isNaN(present) || (present <= 0)){
        document.getElementById('present_error').innerHTML = 'Please provide a valid detail';
    }else{
        document.getElementById('present_error').innerHTML = '';
        present_status=true;
    }

    if(absent === '' || isNaN(absent) || (absent <= 0)){
        document.getElementById('absent_error').innerHTML = 'Please provide a valid detail';
    }else{
        document.getElementById('absent_error').innerHTML = '';
        absent_status=true;
    }

    if(days === '' || isNaN(days) || (days <= 0)){
        document.getElementById('days_error').innerHTML = 'Please provide a valid detail';
    }else{
        document.getElementById('days_error').innerHTML = '';
        days_status=true;
    }

    if(present_status && absent_status && days_status){
        const current_persent = (((present)/(total_hrs))*100).toFixed(2);
        const present_percent = (((present + (days*5))/(total_hrs + (days*5)))*100).toFixed(2);
        const absent_percent = (((present)/(total_hrs + (days*5)))*100).toFixed(2);
        result.innerHTML = 'Your current percentage : '+current_persent+'<br>'+'Your percentage after '+ days +' days present : ' + present_percent + '<br>' +'Your percentage after '+ days +' days absent : ' + absent_percent;
  
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});
