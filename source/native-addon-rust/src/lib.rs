use neon::prelude::*;
use uint::construct_uint;
construct_uint! {
    struct U1024(16);
}
fn os_version(mut context: FunctionContext) -> JsResult<JsString> {
    use sysinfo::{System, SystemExt};
    let sys: System = System::new_all();
    let os_version: Option<String> = sys.os_version();
    let os_version: String = match os_version {
        Some(value) => value,
        None => String::from("unknown"),
    };
    Ok(context.string(os_version))
}

#[neon::main]
fn main(mut context: ModuleContext) -> NeonResult<()> {
    let _guard = sentry::init(("https://459a9c7f853d4f3092363dccb028055b@o4504091405910016.ingest.sentry.io/4504091410563076", sentry::ClientOptions {
        release: sentry::release_name!(),
        ..Default::default()
    }));
    let max_unsigned_integer_128_as_string: Handle<JsString> =
        context.string(std::u128::MAX.to_string()).clone();
    let max_unsigned_integer_1024_as_string = context
        .string(
            U1024 {
                0: [
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                ],
            }
            .to_string(),
        )
        .clone();
    context.export_function("osVersion", os_version)?;
    context.export_value("maxUnsignedInteger128", max_unsigned_integer_128_as_string)?;
    context.export_value(
        "maxUnsignedInteger1024",
        max_unsigned_integer_1024_as_string,
    )?;

    Ok(())
}
