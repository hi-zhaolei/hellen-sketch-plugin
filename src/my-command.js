export function reminder (context) {
  context.document.showMessage("It's alive 🙌");
}


export function onSelectionChanged (conetxt) {

  // var selection = context.actionContext.document.selectedLayers().layers();

  // log(selection[0].CSSAttributes())
  // log(selection[0].class().api())

  var selection = context.selection
  for (var i = 0; i < selection.count(); i++) {
    var layer = selection[i]
    log('layer ' + layer.name + ' is selected.')
  }
}