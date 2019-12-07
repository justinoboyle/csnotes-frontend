let items = [
  {
    title: "Search Result A",
    tags: ["javascript"],
    date: Date.now(),
    poster: "justinoboyle",
    content: "\n\nSome content\n\n## Another header!\n\n**some bold content!**",
    name: "sresulta",
  },
  {
    title: "Search Result B",
    tags: ["debugging"],
    date: Date.now() + 100,
    poster: "justinoboyle",
    content: "\n\nSome content\n\n## Another header!\n\n**some bold content!**",
    name: "sresultb",
  },
  {
    title: "Search Result C",
    tags: ["debugging"],
    date: Date.now() + 200,
    poster: "justinoboyle",
    content: "\n\nSome content\n\n## Another header!\n\n**some bold content!**",
    name: "sresultc",
  },
  {
    title: "Search Result D",
    tags: ["debugging"],
    date: Date.now() + 300,
    href: "/article/justinoboyle/sresultd",
    content: "\n\nSome content\n\n## Another header!\n\n**some bold content!**",
    poster: "justinoboyle",
    name: "sresultd",
  },
]
let userposts = {
  justinoboyle: {
    sresultb: {
      found: true,
      content: "# This is some content D!",
      title: "Search Result A",
      tags: ["javascript"],
      date: Date.now(),
      poster: "justinoboyle",
      name: "sresulta",
    },
    sresulta: {
      found: true,
      content: "# This is some content C!",
      title: "Search Result A",
      tags: ["javascript"],
      date: Date.now(),
      poster: "justinoboyle",
      name: "sresulta",
    },
    sresultc: {
      found: true,
      content: "# This is some content A",
      title: "Search Result C",
      tags: ["javascript"],
      date: Date.now(),
      poster: "justinoboyle",
      name: "sresulta",
    },
    sresultd: {
      found: true,
      content:
        "# This is some content! B\n\nSome content\n\n## Another header!\n\n**some bold content!**",
      title: "Search Result D",
      tags: ["javascript"],
      date: Date.now(),
      poster: "justinoboyle",
      name: "sresulta",
    },
  },
}
if (localStorage.__saved) {
  const o = JSON.parse(localStorage.__saved)
  userposts = o.userposts
  items = o.items
}
window.userposts = userposts
window.items = items

function saveItems() {
  window.localStorage.__saved = JSON.stringify({ userposts: window.userposts, items: window.items })
  // console.log("saving")
}
window.saveItems = saveItems
const token = () => localStorage.token
let count = 0
export default class DataStore {
  constructor(url) {
    this._apiURL = url || "http://localhost:3021/"
    this.token = localStorage.token
  }

  get postMetaStore() {
    return {
      items,
      checkForNew: async function(query, ping) {
        if (localStorage.__saved) {
          // const o = JSON.parse(localStorage.__saved)
          // window.userposts = o.userposts
          // window.items = o.items
        }
        

        // console.log("A")
        // try {
        //   const _ft = await fetch(
        //     'http://localhost:3021' +
        //       `/post?name=${encodeURIComponent(
        //         query.name || ""
        //       )}&search=${encodeURIComponent(query.search || "")}`
        //   )
        //   console.log(await _ft.text())
        //   const obj = await _ft.json()
        //   console.log(obj)
        //   if (obj.success) {
        //     for (let o of obj) {
        //       items.push(o)
        //       if (!userposts[o.poster]) {
        //         userposts[o.poster] = {}
        //       }
        //       userposts[o.poster][o.name] = o
        //     }
        //   }
        //   console.log("Coming back")
        //   ping()
        // } catch (e) {
        //   console.log(e)
        // }
        ping()
      },
    }
  }

  get postContentStore() {
    return {
      userposts,
      checkForNew: async function(query, ping) {
        // const _ft = await fetch(
        //   this._APIUrl +
        //     `/post?name=${encodeURIComponent(
        //       query.name || ""
        //     )}&search=${encodeURIComponent(query.search || "")}`
        // )
        // const obj = await _ft.json()
        // if (obj.success) {
        //   for (let o of obj) {
        //     items.push(o)
        //     if (!userposts[o.poster]) {
        //       userposts[o.poster] = {}
        //     }
        //     userposts[o.poster][o.name] = o
        //   }
        // }
        // console.log("Coming back")
        ping()
      },
    }
  }
}
