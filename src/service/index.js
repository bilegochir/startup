import {HTTP} from '@/service/service'

const GRAPHQL_URL = "http://localhost:4000/graphql"

function saveCompany(name, abn, description, phone, location, category, subcategory) {
    return HTTP.post(GRAPHQL_URL, {
        query: `
          mutation { 
            createCompany(
              name: "${name}", 
              abn: "${abn}",
              description: "${description}",
              phone: "${phone}",
              location: "${location}",
              category: "${category}",
              subcategory: "${subcategory}") 
              {
                name
                abn
                category
            } 
          }`
    })
}

function getCompany(id) {
    return HTTP.post(GRAPHQL_URL, {
        query: `
          query { 
            getCompany(_id: "${id}") 
            {
              _id
              name
              abn
              description
              phone
              location
              category
              subcategory
            }
          }`
    })
}

export default { saveCompany, getCompany }