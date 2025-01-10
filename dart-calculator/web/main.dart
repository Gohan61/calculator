import 'package:web/web.dart';
import 'dart:js_interop';

void main() {
  var htmlElements = HTMLelements();
  var calculatorControl = CalculatorControl(htmlElements);
  calculatorControl._attachEventListeners();
}

class HTMLelements {
  final Element? display = document.querySelector('.display');
  final List<Element> operands =
      document.querySelectorAll('.operands').dartify() as List<Element>;
  final List<Element> operators =
      document.querySelectorAll('.operators').dartify() as List<Element>;
}

enum Operators { add, subtract, divide, multiply, clear }

class CalculatorControl {
  final HTMLelements _view;
  String firstOperand = "";
  Operators? operator;
  double? result;

  CalculatorControl(this._view);

  void _attachEventListeners() {
    _view.operands.forEach((Element el) {
      el.onClick.listen((e) {
        firstOperand += el.textContent as String;
        _view.display?.textContent = firstOperand;
      });
    });

    _view.operators.forEach((Element el) {
      el.onClick.listen((e) {
        if (el.textContent != '=' && el.textContent != 'Delete') {
          operator = _returnOperator(el.textContent!);
        }

        if (el.textContent == 'Delete' && firstOperand != "") {
          firstOperand = firstOperand.substring(0, firstOperand.length - 1);
          _view.display?.textContent = firstOperand;
          return;
        }

        if (firstOperand != "" || operator == Operators.clear) {
          switch (operator) {
            case Operators.add:
              if (result == null) {
                result = double.parse(firstOperand);
              } else {
                result = result! + double.parse(firstOperand);
              }
              firstOperand = "";
              break;
            case Operators.subtract:
              if (result == null) {
                result = double.parse(firstOperand);
              } else {
                result = result! - double.parse(firstOperand);
              }
              firstOperand = "";
              break;
            case Operators.divide:
              if (result == null) {
                result = double.parse(firstOperand);
              } else {
                result = result! / double.parse(firstOperand);
              }
              firstOperand = "";
              break;
            case Operators.multiply:
              if (result == null) {
                result = double.parse(firstOperand);
              } else {
                result = result! * double.parse(firstOperand);
              }
              firstOperand = "";
              break;
            case Operators.clear:
              firstOperand = "";
              result = null;
              break;
            case null:
              throw 'No operator';
          }
        }

        _view.display?.textContent = result.toString();
      });
    });
  }

  Operators _returnOperator(String operator) {
    switch (operator) {
      case '+':
        return Operators.add;
      case '-':
        return Operators.subtract;
      case '/':
        return Operators.divide;
      case '*':
        return Operators.multiply;
      case 'Clear':
        return Operators.clear;
      default:
        throw 'No Operator';
    }
  }
}
