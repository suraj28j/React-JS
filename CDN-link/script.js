// const a = React.createElement(
//     'a',
//     { href: 'https://google.com' },
//     'click me'
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(a);
// ReactDOM.createRoot(document.getElementById('root')).render(a);

// const div = React.createElement(
//     'div',
//     {className:'container'},
//     [
//         React.createElement(
//             "h2",
//             {key:1},
//             "Learning React JS"
//         )
//     ],
//     [
//         React.createElement(
//             'img',
//             {src:"https://raw.githubusercontent.com/suraj28j/Portfolio/refs/heads/main/assets/images/profile_pic.jpg", alt:"Suraj Pic",key:2}
//         )
//     ]
// )
// ReactDOM.createRoot(document.getElementById('root')).render(div);



// const div = React.createElement('div', { className: 'container' },
//     [
//         React.createElement(
//             "h2",
//             { key: 1 },
//             "Learning React JS"
//         ),
//         React.createElement(
//             'img',
//             {
//                 src: "https://raw.githubusercontent.com/suraj28j/Portfolio/refs/heads/main/assets/images/profile_pic.jpg",
//                 alt: "Suraj Pic",
//                 style: { width: '200px', height: '200px' },
//                 key: 2
//             }
//         )
//     ],
//     [
//         // [ Form Section ] //
//         React.createElement(
//             "section",
//             { key: 1 },
//             [
//                 React.createElement("form", { key: 1 },
//                     [
//                         React.createElement("label", { htmlFor: 'name', key: 1 }, "Name : "),
//                         React.createElement("input", { type: "text", placeholder: "username", id: "name", key: 2 })
//                     ]
//                 )
//             ]
//         )

//     ]

// )
// ReactDOM.createRoot(document.getElementById('root')).render(div);


const h2 = <h2>Suraj</h2>
ReactDOM.createRoot(document.getElementById('root')).render(h2);
