function showPic(i) {
            var invisDiv = document.getElementById('invis');
            var childDiv = document.getElementById('pic').childNodes;

            var split =  childDiv[i-1].src.split('/');

            var str = "";
	    if(i<10){
	          str = "<img src=\"images/sert/" + split[split.length - 1] + "\">";
            }
            else{
                  str = "<img src=\"images/sert/mssql/" + split[split.length - 1] + "\">";
            }
            invisDiv.innerHTML = str;
            //invisDiv.style.display = 'block';
	    $('#invis').show('slow');
        }


function div_close() {
            //invisDiv = document.getElementById('invis');
            //invisDiv.innerHTML = "";
            //invisDiv.style.display = 'none';
	$('#invis').hide('slow');
        }

