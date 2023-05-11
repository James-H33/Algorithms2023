use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map: HashMap<&i32, usize> = HashMap::new();
        let mut out: Vec<i32> = vec![];
        let values = nums.iter().enumerate();

        for (i, n) in values.clone() {
            map.insert(n, i); 
        }

        for (i, &n) in values {
            let diff = target - n;

            if map.contains_key(&diff) {
                let index = map.get(&diff).unwrap().clone();

                if index != i {
                    out = vec![i as i32, index as i32];
                    break;
                }
            }
        }

        out
    }        
}