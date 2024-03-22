// function getday()
// {
//     let d=new Date()
//     let month=d.getMonth()+1
//     let year=d.getFullYear()
//     if(month>0&&month<10)
//     {
//         month="0"+month
//     }
//     let day=d.getDate()
//     let date=`${year}/${month}/${day}`
//     return date
// }
// console.log(getday());

// function getday2()
//     {
//         let d=new Date()
//         let year=d.getFullYear()
//         let month=d.getMonth()+1
//         switch(month)
//         {
//             case 1:
//             month='jan'
//             break;

//             case 2:
//                 month='feb'
//                 break;

//                 case 3:
//                     month='mar'
//                     break;

//                     case 4:
//                         month='apr'
//                         break;

//                         case 5:
//                             month='may'
//                             break;

//                             case 6:
//                                 month='jun'
//                                 break;

//                                 case 7:
//                                     month='jul'
//                                     break;

//                                     case 8:
//                                         month='aug'
//                                         break;

//                                         case 9:
//                                             month='sep'
//                                             break;

//                                             case 10:
//                                                 month='oct'
//                                                 break;

//                                                 case 11:
//                                                     month='nov'
//                                                     break;
//                                                     case 12:
//                                                         month='dec'
//                                                         break;

//         }
//         let day=d.getDate()
//         let date=`${month}/${year}/${day}`
//         return date
//  }
//  console.log(getday2());


 let day=new Date("07-02-2001")

  let day1=day.getDay ()
 let days=["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"]
 let names=days[day1]
 console.log(names);