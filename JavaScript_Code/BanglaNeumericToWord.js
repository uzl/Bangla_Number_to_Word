/**
 * Created by uzzal on 5/10/2018.
 */


// ---------------------------------------------------------------------------------------------------------------------

LEN_TO_SLICE_STAGE_MAP = {1: 1, 2: 2, 3: 2, 4: 3, 5: 3, 6: 4, 7: 4};
SLICE_STAGE_LEN_MAP = {1: 1, 2: 3, 3: 3, 4: 5, 5: 5, 6: 7, 7: 7};
SLICE_STAGE_RANGE = {1: [1, 0], 2: [3, 1], 3: [5, 3], 4: [7, 5]};
BANGLA_FACTOR_NAME = {1: 'শত', 2: 'হাজার', 3: 'লক্ষ', 4: 'কোটি'};

BNG_NUM_TO_WORD_MAP = {
    "১": "এক", "২": "দুই", "৩": "তিন", "৪": "চার", "৫": "পাঁচ", "৬": "ছয়", "৭": "সাত", "৮": "আট",
    "৯": "নয়", "১০": "দশ",
    "১১": "এগারো", "১২": "বারো", "১৩": "তেরো", "১৪": "চৌদ্দ", "১৫": "পনেরো", "১৬": "ষোল",
    "১৭": "সতেরো", "১৮": "আঠারো", "১৯": "ঊনিশ", "২০": "বিশ",
    "২১": "একুশ", "২২": "বাইশ", "২৩": "তেইশ", "২৪": "চব্বিশ", "২৫": "পঁচিশ", "২৬": "ছাব্বিশ",
    "২৭": "সাতাশ", "২৮": "আটাশ", "২৯": "ঊনত্রিশ", "৩০": "ত্রিশ",
    "৩১": "একত্রিশ", "৩২": "বত্রিশ", "৩৩": "তেত্রিশ", "৩৪": "চৌত্রিশ", "৩৫": "পঁয়ত্রিশ",
    "৩৬": "ছত্রিশ", "৩৭": "সাঁইত্রিশ", "৩৮": "আটত্রিশ", "৩৯": "ঊনচল্লিশ", "৪০": "চল্লিশ",
    "৪১": "একচল্লিশ", "৪২": "বিয়াল্লিশ", "৪৩": "তেতাল্লিশ", "৪৪": "চুয়াল্লিশ", "৪৫": "পঁয়তাল্লিশ",
    "৪৬": "ছেচল্লিশ", "৪৭": "সাতচল্লিশ", "৪৮": "আটচল্লিশ", "৪৯": "ঊনপঞ্চাশ", "৫০": "পঞ্চাশ",
    "৫১": "একান্ন", "৫২": "বায়ান্ন", "৫৩": "তিপ্পান্ন", "৫৪": "চুয়ান্ন", "৫৫": "পঞ্চান্ন",
    "৫৬": "ছাপ্পান্ন", "৫৭": "সাতান্ন", "৫৮": "আটান্ন", "৫৯": "ঊনষাট", "৬০": "ষাট",
    "৬১": "একষট্টি", "৬২": "বাষট্টি", "৬৩": "তেষট্টি", "৬৪": "চৌষট্টি", "৬৫": "পঁয়ষট্টি",
    "৬৬": "ছেষট্টি", "৬৭": "সাতষট্টি", "৬৮": "আটষট্টি", "৬৯": "ঊনসত্তর", "৭০": "সত্তর",
    "৭১": "একাত্তর", "৭২": "বাহাত্তর", "৭৩": "তিয়াত্তর", "৭৪": "চুয়াত্তর", "৭৫": "পঁচাত্তর",
    "৭৬": "ছিয়াত্তর", "৭৭": "সাতাত্তর", "৭৮": "আটাত্তর", "৭৯": "ঊনআশি", "৮০": "আশি",
    "৮১": "একাশি", "৮২": "বিরাশি", "৮৩": "তিরাশি", "৮৪": "চুরাশি", "৮৫": "পঁচাশি", "৮৬": "ছিয়াশি",
    "৮৭": "সাতাশি", "৮৮": "আটাশি", "৮৯": "ঊননব্বই", "৯০": "নব্বই",
    "৯১": "একানব্বই", "৯২": "বিরানব্বই", "৯৩": "তিরানব্বই", "৯৪": "চুরানব্বই", "৯৫": "পঁচানব্বই",
    "৯৬": "ছিয়ানব্বই", "৯৭": "সাতানব্বই", "৯৮": "আটানব্বই", "৯৯": "নিরানব্বই",
    "০": "", "০০": "",
    "০১": "এক", "০২": "দুই", "০৩": "তিন", "০৪": "চার", "০৫": "পাঁচ", "০৬": "ছয়", "০৭": "সাত",
    "০৮": "আট", "০৯": "নয়"
};

DIGIT_MAP = {
    "0": "০", "1": "১", "2": "২", "3": "৩", "4": "৪", "5": "৫", "6": "৬", "7": "৭", "8": "৮", "9": "৯",
    "০": "০", "১": "১", "২": "২", "৩": "৩", "৪": "৪", "৫": "৫", "৬": "৬", "৭": "৭", "৮": "৮", "৯": "৯"
};


function replace_unwanted_char(num_str) {
    num_str = num_str.trim();
    num_str = num_str.replace(/,/g, '');
    num_str = num_str.replace(/ /g, '');
    return num_str;
}


function is_deciaml_num(num) {
    return num.includes(".");
}

function is_valide_formate(numStr) {
    if ( numStr.trim().length == 0 ){ return false; }

    var dotCntr = 1;
    for (var i = 0; i < numStr.length; i++) {
        var c = numStr.charAt(i);


        if (c == '.') {
            if (dotCntr > 1) {
                return false;
            }
            dotCntr += 1;
        }
        else if (!(c in DIGIT_MAP)) {
            return false;
        }

    }

    return true;
}

function convert_to_bng_num(num_str) {
    var bng_num_str = '';
    for (var i = 0; i < num_str.length; i++) {
        var single_digit = num_str.charAt(i);
        if (single_digit in DIGIT_MAP) {
            bng_num_str += DIGIT_MAP[single_digit];
        }
        else {
            bng_num_str += single_digit;
        }
    }
    return bng_num_str;
}


function make_cycle_list(bngDigitStr) {
    var digitLength = bngDigitStr.length;
    var fullCycle = Math.floor(digitLength / 7);
    var remainderCycle = digitLength % 7;

    var cycleList = [];
    for (var i = 0; i < fullCycle; i++) {
        var start = digitLength - (7 * (i + 1));
        var end = digitLength - (7 * i);
        var oneCycle = bngDigitStr.slice(start, end);
        cycleList.push(oneCycle);
    }

    start = digitLength - (7 * fullCycle) - remainderCycle;
    end = digitLength - (7 * fullCycle);

    if (start != end) {
        cycleList.push(bngDigitStr.slice(start, end));
    }

    return cycleList;

}

function seperateDecimalAndIntegerPart(numStr) {
    var dotPosition = numStr.indexOf('.');
    var integerPart = numStr.slice(0, dotPosition);
    var decimalPart = numStr.slice(dotPosition, numStr.length);

    return {'integerPart': integerPart, 'decimalPart': decimalPart};

}

function eliminateLeftTwoNumber(bagNumStr) {
    var numStrLength = bagNumStr.length;
    var left2Digits = bagNumStr.slice((numStrLength - 2), numStrLength);
    var remainingDigits = bagNumStr.slice(0, numStrLength - 2);
    return {'left2Digits': left2Digits, 'remainingDigits': remainingDigits};
}


function makeSliceList(numStr) {
    var result_list = [];

    var unFilledLength = SLICE_STAGE_LEN_MAP[numStr.length] - numStr.length ;
    // console.log('Need to fill:  '+unFilledLength);

    var complimentStr = '';
    for (var i=0; i<unFilledLength; i++){
        complimentStr += '০';
    }

    numStr =  complimentStr + numStr;
    // console.log('Shaped Number:  '+numStr);

    var significant_slice_stage_len = LEN_TO_SLICE_STAGE_MAP[numStr.length];

    var totalDigit = numStr.length;

    for (var i=0; i<significant_slice_stage_len; i++){
        var limit = SLICE_STAGE_RANGE[i + 1];
        // console.log(limit[1]);
        result_list.push( numStr.slice( totalDigit-limit[0], totalDigit-limit[1]) );
    }

    return result_list;

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function prepareSliceName( sliceList) {
    var resResult = [];

    for (var i=0; i<sliceList.length; i++){
        var digit = sliceList[i];

        var digitName = BNG_NUM_TO_WORD_MAP[digit];
        var factorName = prepareFactorName(i+1, digit);

        resResult.push(digitName+ ' '+ factorName);

    }

    return resResult.reverse();

}

function prepareFactorName(index, digit) {
    var factor = '';
    if (index == 4 ){
        return BANGLA_FACTOR_NAME[index];
    }
    if ( (digit == '০' ) || (digit == '০০' )){
        return factor;
    }

    return BANGLA_FACTOR_NAME[index];

}

function prpareDecimal(decimalPart) {
    var desimalName = '';
    if (decimalPart.length>1){
        var digit = decimalPart.slice(1, decimalPart.length);
        if (decimalPart.length==2){
            digit =  digit+'০';
        }
        if ( (digit == '০' ) || (digit == '০০' )){
            desimalName = 'শুন্য পয়সা'
        }
        else {
            desimalName = BNG_NUM_TO_WORD_MAP[digit] + ' পয়সা';
        }
    }

    return desimalName;
}

function convertToBanglaWord(num) {

    var result_list = [];

    var clean_num = replace_unwanted_char(num);
    // console.log('After Removing Unwanted Char: ' + clean_num);


    if (is_valide_formate(clean_num)) {

        var bag_num = convert_to_bng_num(clean_num);
        // console.log('Bangla Number: ' + bag_num);

        var seperatedNum = seperateDecimalAndIntegerPart(bag_num);
        var integerPart = seperatedNum['integerPart'];
        var decimalPart = seperatedNum['decimalPart'];
        // console.log('Integer Part '+integerPart + '  Decimal Part: ' + decimalPart);


        cycleList = make_cycle_list(integerPart);
        // console.log('Cycle of Koti: '+ cycleList.length);
        // console.log(cycleList);

        for (var i =0; i<cycleList.length; i++){
            var perCycleNumber = cycleList[i];
            var numPartList = eliminateLeftTwoNumber(perCycleNumber);
            var left2Ditit = numPartList['left2Digits'];


            var remainingDigits = numPartList['remainingDigits'];
            // console.log('Remaining: '+ remainingDigits +'   Left 2 Digits: '  + left2Ditit + '  ');
            if (remainingDigits.trim().length>0) {
                var sliceList = makeSliceList(remainingDigits);
                // console.log(sliceList);
                x = prepareSliceName(sliceList);
                for (var i =0; i< x.length; i++){
                    result_list.push(x[i]);
                }
            }
            result_list.push( BNG_NUM_TO_WORD_MAP[left2Ditit] );
            // console.log('' );
        }

        var finalResultStr = '';

        for (var i=0; i<result_list.length; i++){
            finalResultStr += result_list[i] + ' ';
        }

        finalResultStr += ' টাকা '+ prpareDecimal(decimalPart);
        console.log(finalResultStr);
        return finalResultStr;

    }
    else {
        console.log('Error Number Formate ' + raw_num);
        return raw_num;
    }

}





var raw_num = '    46781.06 ';
console.log('input: ' + raw_num);

convertToBanglaWord(raw_num);

