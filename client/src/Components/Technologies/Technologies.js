

import { cecl, qs } from '../Helpers/domHelper'
import { verify } from '../Services/ApiAuth'
import { getTechnologies, updateTechnology } from '../Services/ApiTech'
import { Form, Input, Button } from '../Shared/Form'
import './Technologies.scss'

export async function Technologies() {

  const mainContentScrollable = qs(".scrollable-content")
  while (mainContentScrollable.childNodes.length) {
    mainContentScrollable.removeChild(mainContentScrollable.lastChild)
  }

  const user = await verify()
  const technologies = mainContentScrollable.appendChild(cecl("div", "technologies"))
  const techIcons = await getTechnologies()

  let newIconUrl = ''
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    newIconUrl = e.target.value
  }

  const update = (e, body, id) => {
    e.preventDefault()
    updateTechnology(body, id)
  }

  techIcons.forEach((tech, index) => {
    let icon = cecl('img', 'tech-icon')
    icon.src = `src/img/${tech.icon_url}`
    technologies.appendChild(icon)

    if (user && user.isAdmin) {

      let name = cecl('div', 'name')
      name.innerText = tech.name
      const form = Form('tech-icon-form')
      const input = Input({ className: 'techIconInput', name: tech.name, type: 'text', value: tech.icon_url, placeholder: 'tech-icon-url', handleChange })
      form.appendChild(input)
      technologies.appendChild(form)
      name.addEventListener('click', (e) => {
        handleChange(e)

      })
      const button = Button('update-tech-icon-btn', 'submit', 'update icon url')
      form.addEventListener('submit', (e) => {
        console.log(tech.id)
        update(e, { ...tech, icon_url: newIconUrl }, tech.id)
      })
      form.appendChild(button)
    }


  })
  return mainContentScrollable
}
