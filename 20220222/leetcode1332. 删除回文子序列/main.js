// 给你一个字符串 s，它仅由字母 'a' 和 'b' 组成。每一次删除操作都可以从 s 中删除一个回文 子序列。

// 返回删除给定字符串中所有字符（字符串为空）的最小删除次数。

// 「子序列」定义：如果一个字符串可以通过删除原字符串某些字符而不改变原字符顺序得到，那么这个字符串就是原字符串的一个子序列。

// 「回文」定义：如果一个字符串向后和向前读是一致的，那么这个字符串就是一个回文。

/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
	// 结果要么2要么1，
	// 子序列不需要连续，可以是间隔的
	// 且只有a，b两种情况，整个序列是否回文即可，如果回文就是1，不回文返回2即可
	// 提取所有的a，那么剩下的所有b必定是回文的
	let i = 0;
	let j = s.length - 1;
	while(i < j) {
		if (s[i] !== s[j]) {
			return 2;
		}
		i++;
		j--;
	}
	return 1;

};

/** 
 * @author xiaoshi on 2018/9/24. 
 * Happy Mid-Autumn Festival 
 */
class PlalindromeString {
 	// 判断一个字符串是否回文，算法中用不到了    
 	@Deprecated    
 	private boolean isPlalindrome(String s) { 
  	int len = s.length();
  	for(int i = 0; i < len / 2; i++) {
  	  if(s.charAt(i) != s.charAt(len - 1 - i)) {
  	      return false;            
  	  }        
  	}        
  	return true;    
  }    
  // 预处理字符串，在两个字符之间加上#    
  private String preHandleString(String s) {        
  	StringBuffer sb = new StringBuffer();        
  	int len = s.length();        
  	sb.append('#');        
  	for(int i = 0; i < len; i++) {            
  		sb.append(s.charAt(i));            
  		sb.append('#');        
  	}        
  	return sb.toString();    
  }    
  // 寻找最长回文字串    
  public String findLongestPlalindromeString(String s) {
    // 先预处理字符串        
    String str = preHandleString(s);        
    // 处理后的字串长度        
    int len = str.length();        
    // 右边界        
    int rightSide = 0;        
    // 右边界对应的回文串中心        
    int rightSideCenter = 0;        
    // 保存以每个字符为中心的回文长度一半（向下取整）        
    int[] halfLenArr = new int[len];        
    // 记录回文中心        
    int center = 0;        
    // 记录最长回文长度        
    int longestHalf = 0;        
    for(int i = 0; i < len; i++) {            
    	// 是否需要中心扩展            
    	boolean needCalc = true;            
    	// 如果在右边界的覆盖之内            
    	if(rightSide > i) {                
    	// 计算相对rightSideCenter的对称位置                
    		int leftCenter = 2 * rightSideCenter - i;                
    		// 根据回文性质得到的结论                
    		halfLenArr[i] = halfLenArr[leftCenter];                
    		// 如果超过了右边界，进行调整                
    		if(i + halfLenArr[i] > rightSide) {                    
    			halfLenArr[i] = rightSide - i;                
    		}                
    		// 如果根据已知条件计算得出的最长回文小于右边界，则不需要扩展了                
    		if(i + halfLenArr[leftCenter] < rightSide) {                    
    			// 直接推出结论                    
    			needCalc = false;                
    		}            
    	}            
    	// 中心扩展            
    	if(needCalc) {                
    		while(i - 1 - halfLenArr[i] >= 0 && i + 1 + halfLenArr[i] < len) {                    
    			if(str.charAt(i + 1 + halfLenArr[i]) == str.charAt(i - 1 - halfLenArr[i])) {
  				  halfLenArr[i]++;                    
  				} else {                        
  					break;                    
  				}                
  			}                
  			// 更新右边界及中心                
  			rightSide = i + halfLenArr[i];                
  			rightSideCenter = i;                
  			// 记录最长回文串                
  			if(halfLenArr[i] > longestHalf) {                    
  				center = i;                    
  				longestHalf = halfLenArr[i];                
  			}            
  		}        
  	}        
  	// 去掉之前添加的#        
  	StringBuffer sb = new StringBuffer();        
  	for(int i = center - longestHalf + 1; i <= center + longestHalf; i += 2) {
  	  sb.append(str.charAt(i));        
  	}        
  	return sb.toString();    
  }
}