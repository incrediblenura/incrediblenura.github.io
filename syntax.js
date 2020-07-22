let box = document.getElementById('code');
let complog = document.getElementById('complog');
//let test = 'func hello(int a, int b)\n{\n\treturn a+b;\n}';
function compile(kode){
let token = '';
let tokens = new Array();
for (var i = 0; i < kode.length;i++)
{
  var ch = kode[i];
  if(ch != '\n' || ch != '\t')
  {
    if(ch=='"')
    {
      token+=ch;
      while((ch = kode[++i])!='"')
      {
        token+=ch;
      }
      token+=ch;
      tokens.push("STRLIT");
      token='';
    }
    if(ch==' ' || ch=='+' || ch=='"' || ch==')' || ch=='{' || ch==',' || ch == ';' || ch=='(' || (i == kode.length-1))
    {/*
      if((i == input.length-1) && ch=='"')
      {
        token+=ch;
        ch='';
      }*/
      switch(token)
      {
        case "int" : tokens.push("INT");token='';break;
        case "float" : tokens.push("FLOAT");token='';break;
        case "while" : tokens.push("WHILE");token='';break;
        case "func" : tokens.push("FUNC");token='';break;
        case "return" : tokens.push("RETU");token='';break;
        //case "+" : console.log("plus : "+token);token='';break;
        case '' : break;
        default :
        if(isIdentifier(token))
        {
          tokens.push("ID");token='';break;
        }
        else addMessage(token,1);token='';break;
      }
      switch(ch)
      {
        case ';' : tokens.push("SEMI");ch='';break;
        case '(' : tokens.push("LPAR");ch='';break;
        case ',' : tokens.push("COMA");ch='';break;
        case ')' : tokens.push("RPAR");ch='';break;
        case '{' : tokens.push("LBRA");ch='';break;
        case '}' : tokens.push("RBRA");ch='';break;
        case '+' : tokens.push("PLUS");ch='';break;
        case ' ' :
        case '':
        case '"': break;
        default: addMessage("Unknown Symbol!"+ch,1);
      }
    }
    else if(ch=='\n' || ch=='\t' || ch==' ')continue;
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
return tokens;
}
//parse(tokens);
class Parser
{
  constructor(tokns)
  {
    this.toks = tokns;
    this.indx = 0;
    this.cur_tok = tokns[this.indx];
  }
  error(cur)
  {
    addMessage("Expecting "+cur+" but found "+this.cur_tok+".",1);
  }
  eatToken(tok_exp)
  {
    if(tok_exp === this.cur_tok)
    this.cur_tok = this.toks[++this.indx];
    else this.error(tok_exp);
  }
  parse()
  {
    addMessage("Function : ",0);
    this.eatToken("FUNC");
    this.eatToken("ID");
    this.eatToken("LPAR");
    this.parseArgsList();
    this.eatToken("RPAR");
    this.eatToken("LBRA");
    this.parseStmts();
    this.eatToken("RBRA");
    addMessage("Program : ",0);
  }
  parseStmts()
  {
    addMessage("Statements : ",0);
    if(this.cur_tok == "RETU")
    {
      this.eatToken("RETU");
      this.parseReturnStmt();
    }
  }
  parseReturnStmt()
  {
    addMessage("Return : ",0);
    this.parseExprsn();
    this.eatToken("SEMI");
  }
  parseExprsn()
  {
    addMessage("Expression : ",0);
    this.parseBinOp();
  }
  parseBinOp()
  {
    addMessage("Binary Operation : ",0);
    this.parseLeftOpr();
    this.parseBinOper();
    this.parseRightOpr();
    if(this.cur_tok == "PLUS")this.parseBinOp();
  }
  parseLeftOpr()
  {
    addMessage("LOperand : ",0);
    if(this.cur_tok == "ID")this.eatToken("ID");
  }
  parseRightOpr()
  {
    addMessage("ROperand : ",0);
    if(this.cur_tok=="ID")this.eatToken("ID");
    else if(this.cur_tok == "INUM")this.eatToken("INUM");
    else if(this.cur_tok == "PLUS")this.parseBinOp();
  }
  parseBinOper()
  {
    addMessage("Bin Oper : ",0);
    if(this.cur_tok =="PLUS") this.eatToken("PLUS");
  }
  parseArgsList()
  {
    if(this.cur_tok=="RPAR")return;
    else
    {
    this.parseDataType();
    addMessage("Identifier : ",0);
    this.eatToken("ID");
    if(this.cur_tok == "COMA")
    {
      this.eatToken("COMA")
      this.parseArgsList();
    }
  }
  }
  parseDataType()
  {
    addMessage("Data Type : ",0);
    if(this.cur_tok=="INT")
    this.eatToken("INT");
    else if(this.cur_tok=="FLOAT")
    this.eatToken("FLOAT");
  }
  printTokens()
  {
    for(var i=0;i < this.toks.length;i++)
    {
      console.info(this.toks[i]);
    }
  }
}
function compiler()
{
  let kode = box.value;
  let tokens = compile(kode);
  parser = new Parser(tokens);
  parser.printTokens();
  parser.parse();
  addMessage("Parsing complete",0);
  //console.log("Parsing Complete...");
}
function addMessage(msg,type)
{
  var child = document.createElement("p");
  //child.setAttribute("class","info");
  if(type == 0)
  child.setAttribute("class","info");
  else if(type == 1)
  child.setAttribute("class","error");
  var text = document.createTextNode(msg);
  child.appendChild(text);
  complog.appendChild(child);
}
