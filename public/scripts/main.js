class Role {
  constructor(){
    const target = document.getElementById("role")
    this.list = [
      // Tech
      'human person',
      'digital crafstman',
      'data whisperer',
      'code wrangler',
      'joker, smoker, midnight toker'
    ]
    this.randomRole = this.list[Math.floor(Math.random()*this.list.length)]

    console.log(this.randomRole)
    target.innerText = this.randomRole;
  }
}
