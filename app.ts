let guest_list : string[] = ['Ali','aman','ayan','sana','saba'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('respected sir/madam' + guest_list[i] + ',\we invited you on dinner tomorrow.\nthank tou\n')
// }
 let not_present : string ="aman";
 let new_guest : string = "shehnila";
 guest_list[1] = new_guest;
//  for(let i=0; i<guest_list.length; i++){
//     console.log('respected sir/madam' + guest_list[i] + ',\we invited you on dinner tomorrow.\nthank tou\n')
//  }
//  console.log(`Mr ${not_present} will not  come for dinner tomorrow`)
guest_list.unshift('shaheen','sarfaraz','rizwan');

console.log('\n unfortunately me can not arrange big table. only two people allow.')
while (guest_list.length>2){
    let remove_guest= guest_list.pop();
    console.log(`sorry sir/madam ${remove_guest} You are not invitedd for dinner`)
}
for(let i=0; i<guest_list.length; i++){
    console.log('respected sir/madam' + guest_list[i] + ',\you are still invited on dinner tomorrow\nthank you\n')
}
guest_list.splice(0,2)
console.log(guest_list)
















    9
