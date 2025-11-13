export default function friend({ friend }) {
  const { name, email, id, username,address,website,company ,phone} = friend;
    console.log(address);
    const{street,suite,city,zipcode} =address;
    const {companyName}=company;
  return (
    <div>
      <h2>Id:{id}</h2>
      <h4>Name: {name}</h4>
      <h4>Username: {username}</h4>
      <h4>Email: {email}</h4>
      <h4>Address:
                <ol>
                    <li>Street: {street}</li>
                    <li>Suite: {suite}</li>
                    <li>City: {city}</li>
                    <li>Zio: {zipcode}</li>
                </ol>
      </h4>
      <h4>Phone: {phone}</h4>
      <h4>Website: {website}</h4>
      <h4>Company: {companyName}</h4>
    </div>
  );
}
// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//         }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//     }
// }
