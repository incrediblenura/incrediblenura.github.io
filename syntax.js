let input = 'func hello(int a, int b){return a+b;}';
let tokens = new Array();
let token = '';
for (var i = 0; i < input.length;i++)
{
  var ch = input[i];
  if(ch != '\n' || ch != '\t')
  {
    if(ch== '"')
    {
      token+=ch;
      while((ch = input[++i])!='"')
      {
        token+=ch;
      }
      token+=ch;
      console.log("stri : "+token);
      tokens.push(token);
      token='';
    }
    if(ch==' ' || ch=='+' || ch=='"' || ch==')' || ch=='{' || ch==',' || ch == ';' || ch=='(' || (i == input.length-1))
    {/*
      if((i == input.length-1) && ch=='"')
      {
        token+=ch;
        ch='';
      }*/
      switch(token)
      {
        case "int" :tokens.push(token);token='';break;
        case "float" : tokens.push(token);token='';break;
        case "while" : tokens.push(token);token='';break;
        case "func" : tokens.push(token);token='';break;
        case "return" : tokens.push(token);token='';break;
        //case "+" : console.log("plus : "+token);token='';break;
        case '' : break;
        default :
        if(isIdentifier(token))
        {
          tokens.push(token);token='';break;
        }
        else console.error(token);token='';break;
      }
      switch(ch)
      {
        case ';' : tokens.push(ch);ch='';break;
        case '(' : tokens.push(ch);ch='';break;
        case ',' : tokens.push(ch);ch='';break;
        case ')' : tokens.push(ch);ch='';break;
        case '{' : tokens.push(ch);ch='';break;
        case '}' : tokens.push(ch);ch='';break;
        case '+' : tokens.push(ch);ch='';break;
        case ' ' :
        case '':
        case '"': break;
        default: console.error("Unknown Symbol!"+ch);
      }
    }
    else token+=ch;
//    console.log(token);
  }
  else continue;
}

function isIdentifier(token)
{
  var flag = false;
  for (var i = 0; i < token.length; i++) {
    if(token[i] >= 'a' && token[i] <= 'z' || token[i] >= 'A' && token[i] <= 'Z')
    {
    }
    flag=true;
  }
  return flag;
}

function parse(toks)
{

}
