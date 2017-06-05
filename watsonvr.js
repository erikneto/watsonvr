let watson = require('watson-developer-cloud');
let fs = require('fs');

let visual_recognition = watson.visual_recognition({
  api_key: 'e4b5f0635c00ae28629571bfadebdb651f00b4f2',
  version: 'v3',
  version_date: '2016-05-20'
});

let params = {
  images_file: fs.createReadStream('./carro-demo.jpg'),
  classifier_ids: ['veiculo']
};

visual_recognition.classify(params, function(err, res) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(res, null, 2));
});