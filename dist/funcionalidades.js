//parseInt(groupPai.match(/[1-9]/g)[0])
var countGroups=1;
var countFields=1;

//adicionar estrutura
function adicionarEstrutura(tipofield,groupPai,numeroFieldPai){
	if(tipofield.match(/groups*/g)){
			var nomeGrupo = "groups"+countGroups;
			jsonObj[nomeGrupo]=groups;
			countGroups++;	
			return jsonObj;
	}else if(tipofield=="fields"){
		if(groupPai!="groups"){
			jsonObj[groupPai][0].fields[jsonObj[groupPai][0].fields.length]=fields;
		}else{
			jsonObj[groupPai][0].fields[jsonObj[groupPai][0].fields.length]=fields;
		}
		countFields++;
		return jsonObj;
	}else if(tipofield=="entities"){

		jsonObj[groupPai][0].fields[numeroFieldPai].entities[
			jsonObj[groupPai][0].fields[numeroFieldPai].entities.length+1]=entities;
		return jsonObj;
	}
	else{
		return null;
	}
}