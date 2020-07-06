 var GlobalFunctions = {

    //Generate random name
    randomName: function () {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for ( var i = 0; i < 5; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     },


    //Generate random number
    randomNumber: function(){
        return Math.floor(Math.random() * 100);
    },

    //Generate date
    randomDate: function(){
        var randomSeed = Math.floor(Math.random() * Math.floor(1000000000));
        return new Date(randomSeed*1000000000).toLocaleDateString();
       
    },
}

module.exports = GlobalFunctions;
