//parseInt(groupPai.match(/[1-9]/g)[0])
var countG=1;
var countF=1;

//adicionar estrutura
function adicionarEstrutura(tipofield,groupPai){
	if(tipofield.match(/groups*/g)){
			var nomeGrupo = "groups"+countG;
			jsonObj[nomeGrupo]=groups;
			countG++;	
			return jsonObj;
	}else if(tipofield=="fields"){
		if(groupPai!="groups"){
			jsonObj[groupPai][0].fields[jsonObj[groupPai][0].fields.length]=fields;
		}else{
			jsonObj[groupPai][0].fields[jsonObj[groupPai][0].fields.length]=fields;
		}
		countF++;
		return jsonObj;
	}
	else{
		return null;
	}
}