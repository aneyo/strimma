# ![](cool-logo.gif)

_cool pp counter that works with [**gosumemory**](https://github.com/l3lackShark/gosumemory)!_
[`https://aneyo.github.io/strimma/burning-pp/widget.html`](https://aneyo.github.io/strimma/burning-pp/widget.html)

## Presets

**Centered counter**: [`https://aneyo.github.io/strimma/burning-pp/widget.html#x=c&y=c`](https://aneyo.github.io/strimma/burning-pp/widget.html#x=c&y=c)

## Settings

Widget settings can be set through `#hash` or `?search` parameters.  
Examples:

- [`https://aneyo.github.io/strimma/burning-pp/widget.html`**`?v=b&h=r&speed=5`**](https://aneyo.github.io/strimma/burning-pp/widget.html?v=b&h=r&speed=5)
- [`https://aneyo.github.io/strimma/burning-pp/widget.html`**`#v=b&h=r&speed=5`**](https://aneyo.github.io/strimma/burning-pp/widget.html#v=b&h=r&speed=5)

### **Position**

`v=` or `y=` vertical position, available values: `top,center,bottom` or `t,c,b`  
`h=` or `x=` horizontal position, available values: `left,center,right` or `l,c,r`

_Example:_ [`https://aneyo.github.io/strimma/burning-pp/widget.html?test=727&`**`v=b&h=r`**](https://aneyo.github.io/strimma/burning-pp/widget.html?test=727&v=b&h=r) - will set position to `bottom-right`

_Defaults to `top-left` or `v=t&h=l`_

### **Number separator**

`sep=` number separator, can be one of `none,dot,comma,space`.

`sep=none` _default value._ will show `1234`  
`sep=dot` will show `1.234`  
`sep=comma` will show `1,234`  
`sep=space` will show `1 234`

_Example:_ [`https://aneyo.github.io/strimma/burning-pp/widget.html?test=696969696&`**`sep=comma`**](https://aneyo.github.io/strimma/burning-pp/widget.html?test=696969696&sep=comma) - will show testing number as `696,696,696`

### **Animation speed**

`speed=` controls number changing speed. _defaults to `speed=5`._  
`speed=0` will turn off changing animation and show changes instantly.

_Example:_ [`https://aneyo.github.io/strimma/burning-pp/widget.html?test=727&`**`speed=0`**](https://aneyo.github.io/strimma/burning-pp/widget.html?test=727&speed=0) - show changes instantly

**You can overwrite show/hide transition from css:**

```css
body {
  /* default is 250ms */
  transition-duration: 69s;
}
```

### **[gosumemory](https://github.com/l3lackShark/gosumemory) address**

`addr=` will set a custom [**gosumemory**](https://github.com/l3lackShark/gosumemory) WebSocket server address. _defaults to `addr=ws://localhost:24050/ws`._

### **Misc settings**

`stayonresults` show counter on results screen.  
`savepp` will save pp value on game state changes. _by default, leaving the results screen will set pp value to 0._  
`hidesuffix` will hide "pp" after numbers.

### **Testing**

You can test number display by using `test=` setting.  
**Number will not change to current pp value if `test=` is set.**

_Example:_ [`https://aneyo.github.io/strimma/burning-pp/widget.html#`**`test=727`**](https://aneyo.github.io/strimma/burning-pp/widget.html#test=727) - show funny number
