import Component from '@ember/component';

export default Component.extend({
  

  actions: {
    
    calculate() {
      
      var amount = $('#amount').val();
      var percentage = $('#percentage').val();
      var people = $('#people').val();

      var tip = amount * (percentage / 100);
      var total = Number(amount) + tip;
      var amtPerPerson = total / people;

      $('#tip').val(tip.toFixed(2));
      $('#total').val(total.toFixed(2));
      $('#amtPerPerson').val(amtPerPerson.toFixed(2));
      return false;

    }

  }

});