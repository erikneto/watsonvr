const watson = require('watson-developer-cloud');
const fs = require('fs');

const visual_recognition = watson.visual_recognition({
  api_key: 'e4b5f0635c00ae28629571bfadebdb651f00b4f2',
  version: 'v3',
  version_date: '2016-05-20'
});

const params = {
  images_file: fs.createReadStream('./carro-demo.jpg'),
  classifier_ids: ['veiculo']
};

visual_recognition.classify(params, (err, res) =>
  (err)
    ? console.log(err)
    : console.log(JSON.stringify(res, null, 2))
);
