import { Java } from "../index";

test("testClassDeclaration", () => {

    const expression = new RegExp(Java.rules[0].pattern);
    const matchStr = first(expression, "public class App {");

    expect(matchStr).toBe("App");

});

test("testClassDeclaration_false", () => {

    const expression = new RegExp(Java.rules[0].pattern);
    const result = expression.test("any text");

    expect(result).toBe(false);

});

test("testImportDeclaration", () => {

    const expression = new RegExp(Java.rules[1].pattern);
    const matchStr = first(expression, "import org.springframework.annotation.Annotation;");

    expect(matchStr).toBe("Annotation");

});

test("testImportDeclaration_false", () => {

    const expression = new RegExp(Java.rules[1].pattern);
    const result = expression.test("import Annotation;");

    expect(result).toBe(false);

});

test("testVariableDeclaration", () => {

    const expression = new RegExp(Java.rules[2].pattern);
    const matchStr = first(expression, "Product product;");

    expect(matchStr).toBe("product");

});

test("testMethodDeclaration", () => {

    const expression = new RegExp(Java.rules[3].pattern);
    const matchStr = first(expression, "public static void main( String args[]) {");

    expect(matchStr).toBe("main");

});

function first(expression: RegExp, target: string): string {
    const results = expression.exec(target)!;
    const groups = results['groups']!;
    return groups['target']!;
}