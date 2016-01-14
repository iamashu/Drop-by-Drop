
if(window.PDF_surveyID)
{
  document.write('<a href="javascript:PDF_launch(\''+ PDF_surveyID +'\');">'+ PDF_openText +'</a>');
}

function $$(id){return document.getElementById(id);} 

function PDF_launch(ID,test)
{
  if(!test){test = 0;}
  var d = document;
  var _docW = (d.width != undefined) ? d.width : d.body.offsetWidth;
  var _docH = Math.max(d.documentElement.clientHeight, d.documentElement.scrollHeight);
  if(window.innerHeight > _docH){ _docH = window.innerHeight;}
  _docH = Math.max(_docH,d.body.scrollHeight);
  if(d.documentElement.clientHeight > 0){_docW = d.documentElement.scrollWidth;}else{_docW = d.body.scrollWidth;}
  var _docS = (d.all ? Math.max(d.body.scrollTop,d.documentElement.scrollTop) : window.pageYOffset);
  var _docPH = (d.all ? Math.max(d.body.clientHeight,d.documentElement.clientHeight) : window.innerHeight);
  if(d.all){if(d.documentElement.clientHeight > 0){_docPH = d.documentElement.clientHeight;}}
  if(window.opera){_docPH = window.innerHeight;}

  
  
  if(!$$('PDF_bg_chezchenz'))
  {
    var PDF_bg = d.createElement('div');
    PDF_bg.style.display = 'none';
    PDF_bg.id = 'PDF_bg_chezchenz';
    d.getElementsByTagName('body').item(0).appendChild(PDF_bg);
  }
  else
  {
    var PDF_bg = $$('PDF_bg_chezchenz');
  }
    
  with (PDF_bg.style)
  {
    position = 'absolute';
    backgroundColor = '#000';
    left = '0px';
    top = '0px';
    zindex = 10001;
    filter = 'alpha(opacity=60)';
    opacity = .60;
    width = _docW +'px';
    height = _docH +'px';
    display = 'block';
  }


  if(!$$('PDF_c_chezchenz'))
  {
    var PDF_c = d.createElement('div');
    PDF_c.style.display = 'none';
    PDF_c.id = 'PDF_c_chezchenz';
    d.getElementsByTagName('body').item(0).appendChild(PDF_c);
  }
  else
  {
    var PDF_c = $$('PDF_c_chezchenz');
  }

  with (PDF_c.style)
  {
    width = '800px';
    height = '540px';
    position = 'absolute';
    top = (((_docPH-500)/2) + _docS) + 'px';
    left =  (((_docW - 800)/2) > 0 ? (((_docW - 800)/2) - 50) + 'px' : '10px');
    backgroundColor = '#000';
    zindex = 10003;
  }
  PDF_c.innerHTML = '<div style="margin:8px 0px 0px 10px;float:left;font-family:verdana;color:#fff;font-size:10px;">Powered By <a href="http://www.polldaddy.com" target="_blank" style="color:#FFF;font-weight:bold;text-decoration:none;">PollDaddy.com</a></div><a href="javascript:PDF_close();"><img src="http://www.polldaddy.com/images/sClose.gif" border="0" title="Close"  style="float:right;margin:5px 10px 0px 0px;" /></a>';
  PDF_c.style.display = 'block';

  if(!$$('PDF_i_chezchenz'))
  {
    var PDF_i = d.createElement('iframe');
    PDF_i.id = 'PDF_i_chezchenz';
    d.getElementsByTagName('body').item(0).appendChild(PDF_i);
  }
  else
  {
    var PDF_i = $$('PDF_i_chezchenz');
  }

  if(document.all){PDF_i.scrolling = 'yes'}; 
  PDF_i.src = 'http://surveys.polldaddy.com/survey.php?jspop=1&amp;test='+ test +'&id=' + ID;
  
  with (PDF_i.style)
  {
    position = 'absolute';
    height = '500px';
    display = 'none';
    margin = '0px';
    padding = '0px';
    width = '780px';
    border = '0px';
    top = (((_docPH-480)/2) + _docS + 20) + 'px';
    left =  (((_docW - 780)/2) > 0 ? (((_docW - 780)/2) - 50) + 'px' : '10px');
    zindex = 10005;
  }

  PDF_i.style.display = 'block';
}


function PDF_close()
{
  $$('PDF_bg_chezchenz').style.display = 'none';
  $$('PDF_i_chezchenz').style.display = 'none';
  $$('PDF_c_chezchenz').style.display = 'none';
}