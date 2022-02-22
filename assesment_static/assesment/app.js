const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://my-json-server.typicode.com/avsk80/json_test/db',true);
xhr.responseType = 'text';
xhr.onload = function(e) {
  if (xhr.status == 200) {
      var data = JSON.parse(xhr.responseText)
      document.querySelector('#heading1').innerHTML = data.section2[0].heading;
      document.querySelector('#text1').innerHTML = data.section2[0].text;
      document.querySelector('#heading2').innerHTML = data.section2[1].heading;
      document.querySelector('#text2').innerHTML = data.section2[1].text;
      document.querySelector('#heading3').innerHTML = data.section2[2].heading;
      document.querySelector('#text3').innerHTML = data.section2[2].text;
      document.querySelector('#section3_1').innerHTML = data.section3.text[0];
      document.querySelector('#section3_2').innerHTML = data.section3.text[1];
      document.querySelector('#heading4_1').innerHTML = data.section4[0].heading;
      document.querySelector('#text4_1').innerHTML = data.section4[0].text;
      document.querySelector('#heading4_2').innerHTML = data.section4[1].heading;
      document.querySelector('#text4_2').innerHTML = data.section4[1].text;
    console.log('response', data); // JSON response  
  }
};
xhr.send();