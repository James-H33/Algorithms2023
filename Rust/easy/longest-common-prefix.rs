impl Solution {
    pub fn longest_common_prefix(mut strs: Vec<String>) -> String {
        strs.sort();
        let mut longest = String::new();
        let mut i = 0;
        let mut char_index = 0;
        let mut curr = String::new();

        while i < strs.len() {
            let s: &String = &strs[i];
            let char_op = s.chars().nth(char_index);
            let mut char = String::new();
            
            match char_op.is_some() {
                true => char = char_op.unwrap().to_string(),
                false => return longest
            }

            if i == 0 {
                curr = char.to_string();
            } 

            if char != curr {
                return longest;
            }

            i += 1;

            if i >= strs.len() {
                longest += &curr;
                i = 0;
                char_index += 1;
            }
        }

        longest
    }
}