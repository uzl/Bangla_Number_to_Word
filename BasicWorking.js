
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


const SLICE_PATTERN = [3, 2, 2];
const POSITIONAL_NAME = ['শত', 'হাজার', 'লক্ষ', 'কোটি'];

//---------------------------------------------------------------------------------------------------------

function toBanglaNum(engNumStr) {
    var bngNumStr = '';

    for (var i =0; i< engNumStr.length; i++){
        bngNumStr += DIGIT_MAP[ engNumStr[i] ];
    }

    return bngNumStr;

}


function getName(sliceStr, sliceCycleIndex, isFirstCycle) {
    sliceStr = toBanglaNum(sliceStr);
    var numToWord = '';

    var sliceStrLen = sliceStr.length;

    if (sliceStrLen === 3){
        numToWord = BNG_NUM_TO_WORD_MAP[toBanglaNum(sliceStr.slice(0,1) )] + ' ' +POSITIONAL_NAME[0] + ' ' + BNG_NUM_TO_WORD_MAP[ toBanglaNum( sliceStr.slice(1,3) )];
        if (!isFirstCycle){
            numToWord += ' '+ POSITIONAL_NAME[3] + ' ';
        }
    }
    else if(sliceStrLen === 2){
        numToWord = BNG_NUM_TO_WORD_MAP[ toBanglaNum(sliceStr.slice(0,2) ) ];
        if (!isFirstCycle){
            numToWord +=  ' ' + POSITIONAL_NAME[sliceCycleIndex];
        }
    }
    else {
        numToWord = BNG_NUM_TO_WORD_MAP[toBanglaNum(sliceStr.slice(0,2) )];
        if (!isFirstCycle){
            numToWord +=  ' ' + POSITIONAL_NAME[sliceCycleIndex];
        }
    }

    return numToWord;
}

// ---------------------------------------------------------------------------------------------------------

function transformToWord(numStr) {

    var numDigitStr = numStr + '';
    var digitStrLen = numDigitStr.length;

    var sliceStr = '';
    var sliceCycleIndex = 0;
    var start = 0;
    var end = 0;
    var loopCounter = 0;
    var outputList =  [];
    var isFirstCycle = true;


    while (end< digitStrLen) {
        sliceCycleIndex = loopCounter % 3;
        end = end+ SLICE_PATTERN[sliceCycleIndex];
        if (end > digitStrLen) {end = digitStrLen;}
        sliceStr = numDigitStr.slice(digitStrLen-end,  digitStrLen-start);
        outputList.push( getName(sliceStr, sliceCycleIndex, isFirstCycle) );
        start = end;
        loopCounter += 1;
        isFirstCycle = false;
    }

    return outputList.reverse();

}

console.log( transformToWord (12345667));

