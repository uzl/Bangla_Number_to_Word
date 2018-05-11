#!/usr/bin/env python

""" This Will Convert the Numeric Value to Bangla Words. This is still in beta version. Use it with your own risk. """

__author__ = "Uzzal Podder"
__license__ = "MIT"
__version__ = "0.1"
__date__ = "10 May 2018"
__email__ = "uzzwalbd@gmail.com"

# **********************************************************************************************************************
# ***************************************** Functions and constants Starts *********************************************

LEN_TO_SLICE_STAGE_MAP = {1: 1, 2: 2, 3: 2, 4: 3, 5: 3, 6: 4, 7: 4}
SLICE_STAGE_LEN_MAP = {1: 1, 2: 3, 3: 3, 4: 5, 5: 5, 6: 7, 7: 7}
SLICE_STAGE_RANGE = {1: [1, 0], 2: [3, 1], 3: [5, 3], 4: [7, 5]}
BANGLA_FACTOR_NAME = {1: 'শত', 2: 'হাজার', 3: 'লক্ষ', 4: 'কোটি'}

BNG_NUM_TO_WORD_MAP = {"১": "এক", "২": "দুই", "৩": "তিন", "৪": "চার", "৫": "পাঁচ", "৬": "ছয়", "৭": "সাত", "৮": "আট",
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
                       "০৮": "আট", "০৯": "নয়"}

DIGIT_MAP = {"0": "০", "1": "১", "2": "২", "3": "৩", "4": "৪", "5": "৫", "6": "৬", "7": "৭", "8": "৮", "9": "৯",
             "০": "০", "১": "১", "২": "২", "৩": "৩", "৪": "৪", "৫": "৫", "৬": "৬", "৭": "৭", "৮": "৮", "৯": "৯", }


def replace_unwanted_char(num_str):
    num_str = num_str.replace(',', '')
    num_str = num_str.replace(' ', '')
    return num_str


def convert_to_bng_num(raw_num):
    return "".join(DIGIT_MAP[x] for x in raw_num)


def make_slice_list(num_str):
    result_list = []
    num_str = ''.join('০' * (SLICE_STAGE_LEN_MAP[len(num_str)] - len(num_str))) + num_str
    digit_list = [x for x in num_str]
    total_digit = len(digit_list)

    digit_list_len = len(digit_list)
    most_significant_slice_stage_len = LEN_TO_SLICE_STAGE_MAP[digit_list_len]

    for i in range(most_significant_slice_stage_len):
        limit = SLICE_STAGE_RANGE[i + 1]
        result_list.append(''.join(digit_list[total_digit - limit[0]: total_digit - limit[1]]))

    return result_list


def prepare_factor_name(index, digit):
    factor = ''
    if index == 4:
        return BANGLA_FACTOR_NAME[index]

    from collections import Counter
    if Counter('০') == Counter(digit) or Counter('০০') == Counter(digit):
        return factor
    return BANGLA_FACTOR_NAME[index]


def prepare_slice_name(slice_list):
    index = 1
    res_list = []
    for d in slice_list:
        digit = replace_unwanted_char(d)
        data = BNG_NUM_TO_WORD_MAP[digit] + ' ' + prepare_factor_name(index, digit) + ' '

        res_list.append(data)
        index += 1

    res_list = reversed(res_list)
    return ''.join(res_list)


def make_cycle_list(digit):
    digit_len = len(digit)
    full_cycle = digit_len // 7
    partial_cycle = digit_len % 7

    cycle_list = []
    for i in range(full_cycle):
        start = digit_len - 7 * (i + 1)
        end = digit_len - 7 * i
        sub_data = digit[start: end]
        cycle_list.append(sub_data)

    start = digit_len - 7 * full_cycle - partial_cycle
    end = digit_len - 7 * full_cycle
    if start != end:
        cycle_list.append(digit[start:end])

    return cycle_list


def convert_to_bangla_word(number):
    raw_num = replace_unwanted_char(number)
    num = convert_to_bng_num(raw_num)
    tmp_num = num

    res_list = []

    if len(num) <= 2:
        # print(bng_num_to_word_map[num])
        res_list.append(BNG_NUM_TO_WORD_MAP[num])

    else:
        left_2_digit = num[len(num) - 2: len(num)]
        res_list.append(BNG_NUM_TO_WORD_MAP[left_2_digit])
        tmp_num = num[0: len(num) - 2]

        cycle_list = make_cycle_list(tmp_num)
        for num_str in cycle_list:
            slice_list = make_slice_list(num_str)
            print(slice_list)
            x = prepare_slice_name(slice_list)
            res_list.append(x)

    res_list = reversed(res_list)
    result = ' '.join(x.strip() for x in res_list)
    return result

#***********************************************************************************************************************
#___________________________________________ Functions and constants END  ______________________________________________



if __name__ == "__main__":
    n = convert_to_bangla_word('১২৩২')
    print(n)

    n_2 = convert_to_bangla_word('৫১৪২৩২৪৯')
    print(n_2)

    n_3 = convert_to_bangla_word('123453')
    print(n_3)

