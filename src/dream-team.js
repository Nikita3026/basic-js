module.exports = function createDreamTeam(members) {
  let newMembers=[];
  let counter=0;
  let string="";
  let sort=[];
  if(typeof(members)!="object") return false;
  if(members==null) return false;
  for(let i=0;i<members.length;i++)
  {
    if(typeof(members[i])=="string")
    {
      newMembers[counter]=members[i];
      counter++;
    }
  }
  for(let i=0;i<newMembers.length;i++) newMembers[i]=newMembers[i].toUpperCase();
pointer:  for(let i=0;i<newMembers.length;i++)
  {
    for(let j=0;j<newMembers[i].length;j++)
    {
      if(newMembers[i].codePointAt(j)>64 && newMembers[i].codePointAt(j)<123 )
      {
         string+=newMembers[i][j];
         continue pointer;
      }
    }
  }
  sort=string.split("");
  sort.sort();
  string=sort.join("");
  return string;
};