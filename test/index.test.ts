import { Lang, Rule } from "@makechtec/tlapali_dev";
import { Java } from "../index";

test("testClassDeclaration", () => {

    const rule = findRuleByName("class_declaration", Java);
    const expression = new RegExp(rule.pattern);
    const matchStr = first(expression, "public class App {");

    expect(matchStr).toBe("App");

});

test("testClassDeclaration_false", () => {

    const rule = findRuleByName("class_declaration", Java);
    const expression = new RegExp(rule.pattern);
    const result = expression.test("any text");

    expect(result).toBe(false);

});

test("testImportDeclaration", () => {

    const rule = findRuleByName("import_declaration", Java);
    const expression = new RegExp(rule.pattern);
    const matchStr = first(expression, "import org.springframework.annotation.Annotation;");

    expect(matchStr).toBe("Annotation");

});

test("testImportDeclaration_false", () => {

    const rule = findRuleByName("import_declaration", Java);
    const expression = new RegExp(rule.pattern);
    const result = expression.test("import Annotation;");

    expect(result).toBe(false);

});

test("testVariableDeclaration", () => {

    const rule = findRuleByName("variable_declaration", Java);
    const expression = new RegExp(rule.pattern);
    const matchStr = first(expression, "String name;");

    expect(matchStr).toBe("name");

});

test("testMethodDeclaration", () => {

    const rule = findRuleByName("method_declaration", Java);
    const expression = new RegExp(rule.pattern);
    const matchStr = first(expression, "public static void main( String args[]) {");

    expect(matchStr).toBe("main");

});

function first(expression: RegExp, target: string): string {
    const results = expression.exec(target)!;
    const groups = results['groups']!;
    return groups['target']!;
}

function findRuleByName(name: string, lang: Lang): Rule {
    return lang.rules.find(rule => rule.name === name)!;
}