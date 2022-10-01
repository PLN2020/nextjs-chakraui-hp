import { DiRuby } from "react-icons/di"
import { FaBootstrap, FaConfluence, FaCss3, FaDatabase, FaFigma, FaFileCode, FaGithub, FaHtml5, FaJira, FaJs, FaKeyboard, FaReact, FaSlack, FaTrello } from "react-icons/fa"
import { SiFirebase, SiHeroku, SiMiro, SiNextdotjs, SiPostgresql, SiRubyonrails, SiYarn } from "react-icons/si"
import { Icon } from '@chakra-ui/react'

export const ToolkitData = [
    {
      type: "Front-end",
      icon: <Icon as={FaFileCode} />,
      list: [
        {
            name: "React",
            icon: <Icon as={FaReact} />
        },
        {
            name: "Next.JS",
            icon: <Icon as={SiNextdotjs} />
        },
        {
            name: "Html5",
            icon: <Icon as={FaHtml5} />
        },
        {
            name: "CSS",
            icon: <Icon as={FaCss3} />
        },
        {
            name: "Javascript",
            icon: <Icon as={FaJs} />
        },
        {
            name: "Bootstrap",
            icon: <Icon as={FaBootstrap} />
        }
      ]
    },
    {
      type: "Back-end",
      icon: <Icon as={FaDatabase} />,
      list: [
        {
            name: "Ruby",
            icon: <Icon as={DiRuby} />
        },
        {
            name: "Rails",
            icon: <Icon as={SiRubyonrails} />
        },
        {
            name: "Firebase",
            icon: <Icon as={SiFirebase} />
        },
        {
            name: "Heroku",
            icon: <Icon as={SiHeroku} />
        },
        {
            name: "PostgreSQL",
            icon: <Icon as={SiPostgresql} />
        },
        {
            name: "Yarn",
            icon: <Icon as={SiYarn} />
        }
      ]
    },
    {
      type: "Workflow",
      icon: <Icon as={FaKeyboard} />,
      list: [
        {
            name: "JIRA",
            icon: <Icon as={FaJira} />
        },
        {
            name: "Confluence",
            icon: <Icon as={FaConfluence} />
        },
        {
            name: "Trello",
            icon: <Icon as={FaTrello} />
        },
        {
            name: "Miro",
            icon: <Icon as={SiMiro} />
        },
        {
            name: "Figma",
            icon: <Icon as={FaFigma} />
        },
        {
            name: "GitHub",
            icon: <Icon as={FaGithub} />
        },
        {
            name: "Slack",
            icon: <Icon as={FaSlack} />
        },
      ]
    },
  ]