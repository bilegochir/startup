import { HTTP } from '@/service/service'

const GRAPHQL_URL = "http://localhost:4000/graphql"

function saveCompany(name, abn, description, phone, location, category, subcategory, email, password) {
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
              subcategory: "${subcategory}",
              email: "${email}",
              password: "${password}") 
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
              email
            }
          }`
  })
}

function getProject(id) {
  return HTTP.post(GRAPHQL_URL, {
    query: `
          query { 
            getProject(_id: "${id}") 
            {
              _id
              name
              start_date
              description
              company
            }
          }`
  })
}

function getCompanies(val) {
  return HTTP.post(
    'http://localhost:4000/graphql', {
      query: `
            query {
            getCompanies(search: "${val}") {
              _id
              name
              abn
              description
              phone
              location
              category
              subcategory
              email
            }
          }`
    })
}

function saveProject(name, start_date, description, company) {
  return HTTP.post(GRAPHQL_URL, {
    query: `
          mutation { 
            createProject(
              name: "${name}",
              start_date: "${start_date}",
              description: "${description}",
              company: "${company}")
              {
                name
                start_date
                description
                company
            } 
          }`
  })
}

function getProjects(company) {
  return HTTP.post(GRAPHQL_URL, {
    query: `
          query { 
            getProjects(company: "${company}") 
            {
              _id
              name
              start_date
              description
              company
            }
          }`
  })
}

export default {
  saveCompany, 
  getCompany, 
  getCompanies, 
  saveProject, 
  getProjects, 
  getProject
}