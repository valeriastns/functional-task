let userBalance = 500;
let parcelPrice = 100;
let smsCode = "A001DFX0";
let codeFromDB = "A001DFX0";
let postLocker = [null, null, null, "1432HGF", null];

function checkSMSCode(
  userBalance,
  parcelPrice,
  smsCode,
  codeFromDB,
  postLocker
) {
  if (codeFromDB === smsCode) {
    let currentBalance = userBalance - parcelPrice;

    let lockerCell = postLocker.indexOf("1432HGF");
    let parcelID = postLocker[lockerCell];
    console.log(
      `You can take your parcel ${parcelID} from cell №${
        lockerCell + 1
      }. Your current balace is ${currentBalance}.`
    );
  } else {
    console.log("Something went wrong!");
  }  
}


checkSMSCode(userBalance, parcelPrice, smsCode, codeFromDB, postLocker);
