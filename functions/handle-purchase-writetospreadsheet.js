const { GoogleSpreadsheet } = require('google-spreadsheet')
    
    exports.handler = async (event, context, callback) => {
      try {
        const doc = new GoogleSpreadsheet('some_google_document_id')
        await doc.useServiceAccountAuth(require('./your-service-account.json'))
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[0]
    
    
        const data =JSON.parse(event.body)
        const addedRow = await sheet.addRow(data)
    
     
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: `row added`,
          }),
        }
      } catch (e) {
        return {
          statusCode: 500,
          body: e.toString(),
        }
      }
    }