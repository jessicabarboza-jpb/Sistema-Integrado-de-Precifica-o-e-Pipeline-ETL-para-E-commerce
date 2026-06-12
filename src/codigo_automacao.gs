function salvarSimulacao() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var abaSimulador = planilha.getSheetByName("simulador");
  var abaHistorico = planilha.getSheetByName("Histórico");

  var produto = abaSimulador.getRange("C9").getValue(); 
  var marketplace = abaSimulador.getRange("C20").getValue(); 
  var custoDireto = abaSimulador.getRange("C14").getValue(); 
  var precoSugerido = abaSimulador.getRange("C27").getValue(); 
  var precoPromocional = abaSimulador.getRange("C31").getValue();
  var lucroLiquido = abaSimulador.getRange("F27").getValue(); 
  var margemLiquidaReal = abaSimulador.getRange("F31").getValue();
  

  if(produto === "" || marketplace === "") {
    SpreadsheetApp.getUi().alert("⚠️ Por favor, insira o Produto e o Marketplace antes de salvar.");
    return;
  }

  var dataAtual = new Date();
  
  abaHistorico.appendRow([dataAtual, produto, marketplace, custoDireto, precoSugerido,precoPromocional, lucroLiquido,margemLiquidaReal]);

  SpreadsheetApp.getUi().alert("✅ Simulação salva com sucesso no Histórico!");
}
